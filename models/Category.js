import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

CategorySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Category = mongoose.models.category || mongoose.model("category", CategorySchema);

export default Category;