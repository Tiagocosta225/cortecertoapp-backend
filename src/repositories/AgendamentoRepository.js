const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class AgendamentoRepository {
  async findAll() {
    return prisma.Agendamento.findMany()
  }

  async findById(id) {
    return prisma.Agendamento.findUnique({ where: { id } })
  }

  async create(data) {
    return prisma.Agendamento.create({ data })
  }

  async update(id, data) {
    return prisma.Agendamento.update({ where: { id }, data })
  }

  async delete(id) {
    return prisma.Agendamento.delete({ where: { id } })
  }
}

module.exports = new AgendamentoRepository()
