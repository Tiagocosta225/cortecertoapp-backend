const clienteService = require('../services/ClienteService')
const clienteRepo = require('../repositories/ClienteRepository')
const ClienteService = require('../services/ClienteService')


class ClienteController {
  async index(req, res) {
    const Clientes = await ClienteService.getClientes()
    res.json(Clientes)
  }

  async show(req, res) {
    try {
      const Cliente = await ClienteService.getClientesById(Number(req.params.id))
      res.json(Cliente)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async create(req, res) {
    const newCliente = await ClienteService.createCliente(req.body)
    res.status(201).json(newCliente)
  }

  async update(req, res) {
    const updateCliente = await Clienteservice.updateCLiente(Number(req.params.id), req.body)
    res.json(updatedClientes)
  }

  async delete(req, res) {
    await ClienteService.deleteCliente(Number(req.params.id))
    res.status(204).send()
  }
}

module.exports = new ClienteController()
