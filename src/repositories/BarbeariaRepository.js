const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class BarbeariaRepository {
  async findAll() {
    return prisma.Barbearia.findMany()
  }

  async findById(id) {
    return prisma.Barbearia.findUnique({ where: { id } })
  }

  async create(data) {
    return prisma.Barbearia.create({ data })
  }

  async update(id, data) {
    return prisma.Barbearia.update({ where: { id }, data })
  }

  async delete(id) {
    return prisma.Barbearia.delete({ where: { id } })
  }
}

module.exports = new BarbeariaRepository()
