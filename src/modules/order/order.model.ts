import { model, Schema } from 'mongoose'
import { order } from './order.interface'

const orderSchema = new Schema<order>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // eslint-disable-next-line no-useless-escape
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        },
        message: 'Please enter a valid email',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
)

const Order = model<order>('Order', orderSchema)

export default Order
