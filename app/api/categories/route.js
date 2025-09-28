import { NextResponse } from "next/server";
import { connectToDatabase } from "@/config/db";
import Category from "@/models/Category";
import Product from "@/models/Product";

// GET - Fetch all categories
export async function GET() {
  try {
    await connectToDatabase();
    
    const categories = await Category.find({}).sort({ name: 1 });
    
    // Get product count for each category
    const categoriesWithProductCount = await Promise.all(
      categories.map(async (category) => {
        const productCount = await Product.countDocuments({ category: category.name });
        return {
          _id: category._id,
          name: category.name,
          products: productCount,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt
        };
      })
    );

    return NextResponse.json({
      success: true,
      categories: categoriesWithProductCount
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST - Create a new category
export async function POST(request) {
  try {
    await connectToDatabase();
    
    const { name } = await request.json();
    
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Category name is required" },
        { status: 400 }
      );
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ 
      name: { $regex: new RegExp(`^${name.trim()}$`, 'i') } 
    });
    
    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      );
    }

    const category = new Category({
      name: name.trim()
    });

    await category.save();

    return NextResponse.json({
      success: true,
      message: "Category created successfully",
      category: {
        _id: category._id,
        name: category.name,
        products: 0,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt
      }
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create category" },
      { status: 500 }
    );
  }
}

// PUT - Update a category
export async function PUT(request) {
  try {
    await connectToDatabase();
    
    const { id, name } = await request.json();
    
    if (!id || !name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Category ID and name are required" },
        { status: 400 }
      );
    }

    // Check if category exists
    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    // Check if new name already exists (excluding current category)
    const existingCategory = await Category.findOne({ 
      name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
      _id: { $ne: id }
    });
    
    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "Category name already exists" },
        { status: 400 }
      );
    }

    // Update products that use this category
    const oldName = category.name;
    const newName = name.trim();
    
    if (oldName !== newName) {
      await Product.updateMany(
        { category: oldName },
        { category: newName }
      );
    }

    // Update category
    category.name = newName;
    category.updatedAt = new Date();
    await category.save();

    // Get product count
    const productCount = await Product.countDocuments({ category: newName });

    return NextResponse.json({
      success: true,
      message: "Category updated successfully",
      category: {
        _id: category._id,
        name: category.name,
        products: productCount,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt
      }
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a category
export async function DELETE(request) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Category ID is required" },
        { status: 400 }
      );
    }

    // Check if category exists
    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    // Check if category has products
    const productCount = await Product.countDocuments({ category: category.name });
    if (productCount > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Cannot delete category. It has ${productCount} products associated with it.` 
        },
        { status: 400 }
      );
    }

    // Delete category
    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete category" },
      { status: 500 }
    );
  }
}
