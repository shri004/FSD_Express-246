const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxLength: [100, "Name should not exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price can't be negative"],
    },
    description: {
      type: String, 
      trim: true,
    },
    category: {
      type: String,
      default: "others",
      enum: ["electronics", "clothing", "food", "others"], 
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock can't be negative"], 
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);