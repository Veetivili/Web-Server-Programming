const Vehicle = require('../models/Vehicle')

const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({})
  res.status(200).json({ success: true, data: vehicles })
}

const createVehicle = async (req, res) => {
  const { make, model, license_plate } = req.body
  if (!make || !model) {
    return res
      .status(400)
      .json({ success: false, msg: 'Both fields required' })
  }
  const type = req.body.type || (Math.round(Math.random()) > 0 ? 'Van' : 'Passenger car')
  try {
    const vehicle = new Vehicle({
      make,
      model,
      type,
      license_plate
    })
    await vehicle.save()
    return res.status(201).send({ success: true, data: vehicle })
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {}
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })
      return res.status(400).send(errors)
    }
    res.status(500).send({ success: false, msg: error.message })
  }
}

const getSingleVehicle = async (req, res) => {
  const { id } = req.params
  try {
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      return res
      //eslint-disable-next-line
      .status(404).json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    return res.status(200).json({ success: true, data: vehicle })
  } catch (error) {
    console.log(error)
  }
}

const updateVehicle = async (req, res) => {
  const { id } = req.params
  const { make } = req.body
  try {
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      return res
      //eslint-disable-next-line
      .status(404).json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    vehicle.make = make
    const updatedVehicle = await vehicle.save()
    return res.status(200).json({ success: true, data: updatedVehicle })
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {}
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })
      return res.status(400).send(errors)
    }
    res.status(500).send({ success: false, msg: error.message })
  }
}
  
const deleteVehicle = async (req, res) => {
  const { id } = req.params
  try {
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      return res
        .status(404)
        .json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    await Vehicle.findByIdAndRemove(id)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).send({ success: false, msg: error.message })
  }
}

module.exports = {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle
}
