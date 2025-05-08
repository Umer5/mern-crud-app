import mongoose from "mongoose";

const prodcutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Product = mongoose.model('Product', prodcutSchema);
// its show in db as products

export default Product;