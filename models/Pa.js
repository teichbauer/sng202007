import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// compile ItemSchema to a model Item, and export it. in MongoDB, a collection
// is then created using lower-cased pluralized "items" as collection name
export const Item = mongoose.model("item", ItemSchema);
