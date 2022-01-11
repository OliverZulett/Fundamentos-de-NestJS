import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema ({
  name: String,
  quantity: Number,
});
