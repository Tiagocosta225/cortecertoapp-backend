const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createCliente(data) {
  // Espera que data contenha: nome, telefone, email e barbeariaId
  const { barbeariaId, ...rest } = data;

  return await prisma.cliente.create({
    data: {
      ...rest,
      barbearia: {
        connect: { id: barbeariaId } 
      }
    }
  });
}

async function getClientes() {
  return await prisma.cliente.findMany({
    include: { barbearia: true, agendamentos: true }
  });
}

async function getClienteById(id) {
  return await prisma.cliente.findUnique({
    where: { id },
    include: { barbearia: true, agendamentos: true }
  });
}

async function updateCliente(id, data) {
  const { barbeariaId, ...rest } = data;
  return await prisma.cliente.update({
    where: { id },
    data: {
      ...rest,
      ...(barbeariaId && { barbearia: { connect: { id: barbeariaId } } })
    }
  });
}

async function deleteCliente(id) {
  return await prisma.cliente.delete({
    where: { id }
  });
}

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};
