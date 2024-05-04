import mongoose from "mongoose";

const pyaProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: [true, "A product must have a name"]
    },
    original_price: {
        type: Number,
        default: 0
    },
    discount_price: {
        type: Number,
        default: 0
    },
    percentage: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: null
    },
    site: {
        type: String,
        default: null
    },
    restaurant: {
        type: String,
        default: null
    },
    restaurant_id: {
        type: Number,
        default: null
    },
    isPromo: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: () => {
          let date = new Date();
          date.setHours(date.getHours() - 3);
          return date;
        }
    }
});

const pyaProduct = mongoose.model("pyaProduct", pyaProductSchema)

export default pyaProduct;