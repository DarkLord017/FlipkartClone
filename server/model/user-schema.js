import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    products: [productSchema],
});

const user = mongoose.model('user', userSchema);

export default user;