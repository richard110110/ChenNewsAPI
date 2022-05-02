const mongoose = require("mongoose");

const newsItemsSchema = new mongoose.Schema(
  {
    title: { type: String, required: "" },
    description: { type: String, required: "" },
    content: { type: String, required: "" },
    postedBy: { type: Object, required: "" },
  },
  {
    timestamps: true,
  }
);

const NewsItemModel= mongoose.model('newsitems', newsItemsSchema)

module.exports = NewsItemModel;
