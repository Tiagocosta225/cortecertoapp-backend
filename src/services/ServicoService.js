const ServicoRepository = require('../repositories/ServicoRepository')

class ServicoService {
  async getServicos() {
    return ServicoRepository.findAll()
  }

  async getServicoById(id) {
    const servico = await ServicoRepository.findById(id)
    if (!servico) throw new Error('Serviço não encontrado')
    return servico
  }

  async createServico(data) {
    return ServicoRepository.create(data)
  }

  async updateServico(id, data) {
    return ServicoRepository.update(id, data)
  }

  async deleteServico(id) {
    return ServicoRepository.delete(id)
  }
}

module.exports = new ServicoService()
