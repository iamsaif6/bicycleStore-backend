import express from 'express'
import { bicycleController } from './bicyle.controller'

const router = express.Router()
// Create cycle
router.post('/', bicycleController.createBicycle)
// Get cycle
router.get('/', bicycleController.getBicycle)

// Get single cycle
router.get('/:id', bicycleController.singleCycle)

// Update cycle
router.put('/:id', bicycleController.updateCycle)

// Delete cycle
router.delete('/:id', bicycleController.deleteCycle)

export default router
