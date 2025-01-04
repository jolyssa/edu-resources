const Resource = require('../models/Resource')

//? Get all resources
const getResources = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 24
    const skip = (page - 1) * limit

    const total = await Resource.countDocuments()
    const resources = await Resource.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })

    res.json({
      resources,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalResources: total
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
  
  //? Get single resource
  const getResource = async (req, res) => {
    try {
      const resource = await Resource.findById(req.params.id)
      if (resource) {
        res.json(resource)
      } else {
        res.status(404).json({ message: 'Resource not found' })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  
  //? Create resource
  const createResource = async (req, res) => {
    try {
      const resource = new Resource(req.body)
      const savedResource = await resource.save()
      res.status(201).json(savedResource)
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message)
        return res.status(400).json({ errors })
      }
      res.status(500).json({ message: error.message })
    }
  }
  
  //? Update resource
  const updateResource = async (req, res) => {
    try {
    // If authorized, proceed with update
      const updateResource = await Resource.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      )

      if (updateResource) {
        res.json(updateResource)
      } else {
        res.status(404).json({ message: 'Resource not found' })
      }
      
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message)
        return res.status(400).json({ errors })
      }
      res.status(500).json({ message: error.message })
    }
  }
  
  //? Delete resource
  const deleteResource = async (req, res) => {
    try {
      const resource = await Resource.findByIdAndDelete(req.params.id)
      if (resource) {
        res.json({ message: 'Resource deleted successfully' })
      } else {
        res.status(404).json({ message: 'Resource not found' })
      }
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  
  module.exports = {
    getResources,
    getResource,
    createResource,
    updateResource,
    deleteResource
  }
  