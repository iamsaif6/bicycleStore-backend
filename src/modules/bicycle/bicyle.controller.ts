/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { bicycleService } from './bicycle.service'

// Create Cycle
const createBicycle = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await bicycleService.createBicycle(data)
    res.json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    })
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

// Get All Cycles
const getBicycle = async (req: Request, res: Response) => {
  try {
    const query = req.query.searchTerm
    const result = await bicycleService.getBicycle(query)
    // Check if the product was found
    if (result.length === 0) {
      res.status(404).json({
        message: 'No Bicycle Found',
        success: false,
      })
      return
    }
    res.json({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: result,
    })
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

//Get Single Cycle
const singleCycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await bicycleService.singleCycle(id)
    // Check if the product was found
    if (!result) {
      res.status(404).json({
        message: 'Bicycle not found',
        success: false,
      })
      return
    }
    res.json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    })
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

// Update a cycle
const updateCycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = req.body
    const result = await bicycleService.updateCycle(id, data)
    // Check if the product was found
    if (!result) {
      res.status(404).json({
        message: 'Bicycle not found',
        success: false,
      })
      return
    }

    res.json({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    })
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

// Delete a bicycle
const deleteCycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await bicycleService.deleteCycle(id)
    // Check if the product was found
    if (!result) {
      res.status(404).json({
        message: 'Bicycle not found',
        success: false,
      })
      return
    }

    res.json({
      message: 'Bicycle deleted successfully',
      status: true,
      data: result,
    })
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

// order a cycle

export const bicycleController = {
  createBicycle,
  getBicycle,
  singleCycle,
  updateCycle,
  deleteCycle,
}
