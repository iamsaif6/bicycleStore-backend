import { model, Schema } from 'mongoose'
import { bicycle } from './bicycle.interface'

const productSchema = new Schema<bicycle>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    brand: {
      type: String,
      required: [true, 'Please provide a brand name'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Please provide a type'],
    },
    description: {
      type: String,
      required: [true, 'Please enter description'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide a quantity'],
    },
    inStock: {
      type: Boolean,
      default: true,
      required: [true, 'Please provide a true or false'],
    },
  },
  { timestamps: true, versionKey: false }
)

const Product = model<bicycle>('Product', productSchema)

export { Product }
