const ServicoService = require('../services/ServicoService')

class ServicoController {
  async index(req, res) {
    const servicos = await ServicoService.getServicos()
    res.json(servicos)
  }

  async show(req, res) {
    try {
      const servico = await ServicoService.getServicoById(Number(req.params.id))
      res.json(servico)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async create(req, res) {
  try {
    const newServico = await ServicoService.createServico(req.body)
    res.status(201).json(newServico)
  } catch (error) {
    console.error(error) // 👈 vai mostrar o erro real no terminal
    res.status(400).json({ error: error.message })

  }
}


  async update(req, res) {
    const updateServico = await ServicoService.updateServico(Number(req.params.id), req.body)
    res.json(updateServico)
  }

  async delete(req, res) {
    await ServicoService.deleteServico(Number(req.params.id))
    res.status(204).send()
  }
}

module.exports = new ServicoController()
