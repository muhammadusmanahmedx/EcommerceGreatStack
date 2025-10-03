import mongoose from "mongoose";

// Delete any existing models to force recreation
delete mongoose.models.address;
delete mongoose.models.Address;

const addressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    pinCode: { type: Number, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
    strict: true // This ensures only defined schema fields are saved
  }
);

const Address = mongoose.model("address", addressSchema);

export default Address;