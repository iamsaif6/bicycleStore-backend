import { order } from './order.interface'
import Order from './order.model'

const orderCycle = async (
  orderData: order,
  cycleData: { quantity: number; inStock: boolean; save: () => void }
) => {
  cycleData.quantity = cycleData.quantity - orderData.quantity

  //   change the inStock of the product quality is 0
  if (cycleData.quantity === 0) {
    cycleData.inStock = false
  }
  cycleData.save()

  const result = await Order.create(orderData)
  return result
}

// Total revenue from order
const totalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$totalPrice', '$quantity'] } },
      },
    },
  ])

  return result
}

export const orderService = {
  orderCycle,
  totalRevenue,
}
