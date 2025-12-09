const BarbeariaService = require('../services/BarbeariaService')
const BarbeariaRepo = require('../repositories/BarbeariaRepository') 


class BarbeariaController {
  async index(req, res) {
    const Barbearias = await BarbeariaService.getBarbearias()
    res.json(Barbearias)
  }

  async show(req, res) {
    try {
      const Barbearia = await userService.getUserById(Number(req.params.id))
      res.json(user)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async create(req, res) {
    const newUser = await userService.createUser(req.body)
    res.status(201).json(newUser)
  }

  async update(req, res) {
    const updatedUser = await userService.updateUser(Number(req.params.id), req.body)
    res.json(updatedUser)
  }

  async delete(req, res) {
    await userService.deleteUser(Number(req.params.id))
    res.status(204).send()
  }
}

module.exports = new BarbeariaController()
