import { Types } from 'mongoose'

export interface order {
  email: string
  product: Types.ObjectId
  quantity: number
  totalPrice: number
}
