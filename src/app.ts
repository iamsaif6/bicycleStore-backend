import express, { Application, Request, Response } from 'express'

import orderRouter from './modules/order/order.router'
import router from './modules/bicycle/bicycle.router'
const app: Application = express()

// Middleware
app.use(express.json())

app.use('/api/products', router)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Server is running',
  })
})

export default app
