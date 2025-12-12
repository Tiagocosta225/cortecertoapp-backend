const AgendamentoRepository = require('../repositories/AgendamentoRepository')

class AgendamentoService {
  async getAgendamento() {
    return AgendamentoRepository.findAll()
  }

  async getAgendamentoById(id) {
    const Agendamento = await AgendamentoRepository.findById(id)
    if (!Agedamento) throw new Error('Agendamento não encontrado')
    return Agendamento
  }

  async createAgendamento(data) {
    return prisma.agendamento.create({
      data: {
        data: new Date(data.data),
        clienteId: data.clienteId,
        barbeariaId: data.barbeariaId,
        servicoId: data.servicoId,
        status: data.status || 'pendente',
      }
    })
  }

  async updateAgendamento(id, data) {
    return AgendamentoRepository.update(id, data)
  }

  async deleteAgendamento(id) {
    return AgendamentoRepository.delete(id)
  }
}

module.exports = new AgendamentoService()
