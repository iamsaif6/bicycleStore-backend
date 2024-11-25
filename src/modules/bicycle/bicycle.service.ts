import { bicycle } from './bicycle.interface'
import { Product } from './bicycle.model'

// Create a new cycle
const createBicycle = async (data: bicycle) => {
  const result = await Product.create(data)
  return result
}

// Get a all cycle
const getBicycle = async (
  query: string | undefined | Record<never, string> | null
) => {
  const filter = query
    ? {
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { brand: { $regex: query, $options: 'i' } },
          { type: { $regex: query, $options: 'i' } },
        ],
      }
    : {}
  const result = await Product.find(filter)
  return result
}

// Get single cycle
const singleCycle = async (id: string) => {
  const result = await Product.findOne({ _id: id })
  return result
}

// Update a cycle
const updateCycle = async (id: string, data: object) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true })
  return result
}

// Delete a cycle
const deleteCycle = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

// Export the service
export const bicycleService = {
  createBicycle,
  getBicycle,
  singleCycle,
  deleteCycle,
  updateCycle,
}
