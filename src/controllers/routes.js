const express = require('express')
const AgendamentoController = require('./AgendamentoController')
const BarbeariaController = require('./BarbeariaController')
const ClienteController = require('./ClienteController')
const ServicoController = require('./ServicoController')


const router = express.Router()

//Agendamento
router.get('/Agendamento', AgendamentoController.index)
router.get('/Agendamento/:id', AgendamentoController.show)
router.post('/Agendamento', AgendamentoController.create)
router.put('/Agendamento/:id', AgendamentoController.update)
router.delete('/Agendamento/:id', AgendamentoController.delete)

//Barbearia
router.get('/Barbearia', BarbeariaController.index)
router.get('/Barbearia/:id', BarbeariaController.show)
router.post('/Barbearia', BarbeariaController.create)
router.put('/Barbearia/:id', BarbeariaController.update)
router.delete('/Barbearia/:id', BarbeariaController.delete)

//Cliente
router.get('/Cliente', ClienteController.index)
router.get('/Cliente/:id', ClienteController.show)
router.post('/Cliente', ClienteController.create)
router.put('/Cliente/:id', ClienteController.update)
router.delete('/Cliente/:id', ClienteController.delete)

//Servico
router.get('/Servico', ServicoController.index)
router.get('/Servico/:id', ServicoController.show)
router.post('/Servico', ServicoController.create)
router.put('/Servico/:id', ServicoController.update)
router.delete('/Servico/:id', ServicoController.delete)

module.exports = router
