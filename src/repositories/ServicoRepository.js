const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class ServicoRepository {
  async findAll() {
    return prisma.servico.findMany()
  }

  async findById(id) {
    return prisma.servico.findUnique({ where: { id } })
  }

  async create(data) {
    return prisma.servico.create({
      data: {
        nome: data.nome,
        preco: data.preco,
        duracaoMin: data.duracaoMin,
        barbeariaId: data.barbeariaId
      }
    })
  }

  async update(id, data) {
    return prisma.servico.update({ where: { id }, data })
  }

  async delete(id) {
    return prisma.servico.delete({ where: { id } })
  }
}

module.exports = new ServicoRepository()
