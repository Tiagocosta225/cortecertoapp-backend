const AgendamentoService = require('../services/AgendamentoService')
const AgendamentoRepo = require('../repositories/AgendamentoRepository')


class AgendamentoController {
  async index(req, res) {
    const Agendamento = await AgendamentoService.getAgendamentos()
    res.json(Agendamento)
  }

  async show(req, res) {
    try {
      const Agendamento = await AgendamentoService.getAgendamentoById(Number(req.params.id))
      res.json(Agendamento)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async create(req, res) {
    const newAgendamento = await AgendamentoService.createAgendamento(req.body)
    res.status(201).json(newAgendamento)
  }

  async update(req, res) {
    const updatedAgendamento = await AgendamentoService.updateAgendamento(Number(req.params.id), req.body)
    res.json(updatedAgendamento)
  }

  async delete(req, res) {
    await AgendamentoService.deleteAgendamento(Number(req.params.id))
    res.status(204).send()
  }
}

module.exports = new AgendamentoController()