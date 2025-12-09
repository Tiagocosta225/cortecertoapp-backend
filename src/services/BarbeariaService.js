const BarbeariaRepository = require('../repositories/BarbeariaRepository')

class BarbeariaService {
  async getBarbearia() {
    return BarbeariaRepository.findAll()
  }

  async getBarbeariaById(id) {
    const Barbearia = await BarbeariaRepository.findById(id)
    if (!Barbearia) throw new Error('Usuário não encontrado')
    return Barbearia
  }

  async createBarbearia(data) {
    // lógica de negócio (validações, etc)
    return BarbeariaRepository.create(data)
  }

  async updateBarbearia(id, data) {
    return BarbeariaRepository.update(id, data)
  }

  async deleteBarbearia(id) {
    return BarbeariaRepository.delete(id)
  }
}

module.exports = new BarbeariaService()


