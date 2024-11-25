import { Request, Response } from 'express'
import { orderService } from './order.service'
import { Product } from '../bicycle/bicycle.model'

const orderCycle = async (req: Request, res: Response) => {
  try {
    const orderData = req.body

    const cycleData = await Product.findById({ _id: orderData.product })
    // Return if the cycle is not found
    if (!cycleData) {
      res.status(404).json({
        message: 'Bicycle not found',
        status: false,
      })
      return
      //   return if the cycle is out of stock
    } else if (!cycleData.inStock) {
      res.status(404).json({
        message: 'Bicycle is out of stock',
        status: false,
      })
      return
    }
    if (orderData.quantity > cycleData.quantity) {
      // return if the quantity is lower than the order quantity
      res.status(404).json({
        message: 'Insufficient quantity',
        status: false,
      })
      return
    }

    const result = await orderService.orderCycle(orderData, cycleData)
    res.json({
      message: 'Order created successfully',
      status: true,
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.send({
      message: err.message || 'Something went wrong',
      success: false,
      error: {
        name: err.name || 'Something went wrong',
        errors: err.errors,
      },
      stack: err.stack,
    })
  }
}

const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.totalRevenue()
    res.json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: result[0].totalRevenue,
      },
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.send({
      message: err.message || 'Something went wrong',
      success: false,
      error: {
        name: err.name || 'Something went wrong',
        errors: err.errors,
      },
      stack: err.stack,
    })
  }
}

export const orderController = {
  orderCycle,
  totalRevenue,
}
