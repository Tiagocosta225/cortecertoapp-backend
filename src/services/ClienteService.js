// src/services/ClienteService.js
const ClienteRepository = require('../repositories/ClienteRepository')

class ClienteService {
  async getClientes() {
    return ClienteRepository.getClientes()
  }

  async getClienteById(id) {
    const cliente = await ClienteRepository.getClienteById(id)
    if (!cliente) throw new Error('Usuário não encontrado')
    return cliente
  }

  async createCliente(data) {
    return ClienteRepository.createCliente(data)
  }

  async updateCliente(id, data) {
    return ClienteRepository.updateCliente(id, data)
  }

  async deleteCliente(id) {
    return ClienteRepository.deleteCliente(id)
  }
}

// exporta uma instância da classe
module.exports = new ClienteService()
