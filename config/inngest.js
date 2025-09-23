import { Inngest } from "inngest";
import connectToDatabase from "./db";
import User from "@/models/Users";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "ecommerce-next" });

// inget fucntion to save user data in db
export const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk"
    },
    { event: "clerk/user.created" },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            name: first_name + " " + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url,
            cartItems: { type: Object, default: {} },

        }
        await connectToDatabase();
        await User.create(userData);
    }
)


// inget fucntion to update user data in db
export const syncUserUpdate = inngest.createFunction(
    {
        id: "user-update-from-clerk"
    },
    {
        event: "clerk/user.updated"
    },
        async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            name: first_name + " " + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url,
            cartItems: { type: Object, default: {} },

        }
        await connectToDatabase();
        await User.findByIdAndUpdate(id,userData);
    }

)

// inget fucntion to delete user data in db
export const syncUserDeletion = inngest.createFunction(
    {
        id: "user-deletion-from-clerk"
    },
    {event : "clerk/user.deleted"},
    async ({ event }) => {
        const { id } = event.data;
        await connectToDatabase();
        await User.findByIdAndDelete(id);
    }
)



// ingest function to create order in db

export const createOrder = inngest.createFunction(
    {
        id: "create-user-order",
        batchEvents:{
            maxSize:5,
            timeout:'5s'
        }
    },{event: "order/create"
    },async ({events})=>{
        const orders=events.map((event)=>{
            return {
                userId:event.data.userId,
                items:event.data.items,
                address:event.data.address,
                amount:event.data.amount,
                date:event.data.date
            }
        })

        await connectToDatabase();
        await Order.insertMany(orders);

        return {success:true,processed:orders.length}
       

    }
    
) 

