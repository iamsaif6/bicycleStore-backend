import { Router } from 'express'
import { orderController } from './order.controller'

const orderRouter = Router()

// order a cycle
orderRouter.post('/', orderController.orderCycle)

//total revenue
orderRouter.get('/revenue', orderController.totalRevenue)
export default orderRouter
