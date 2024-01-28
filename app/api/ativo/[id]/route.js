import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Ativo ==================================
export const GET = async (request, { params }) => {
  const { id } = params
  const authorId = parseInt(id)
  try {
    const ativos = await prisma.ativos.findMany({
      where: {
        authorId
      }
    })

    if (!ativos) {
      return NextResponse.json({ message: "Não há dados para esse usuario" })
    }
    return NextResponse.json(ativos)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}


export const DELETE = async (request, { params }) => {
  const { id } = params
  const Id = parseInt(id)
  try {
    await prisma.ativos.delete({
      where: {
        id: Id
      }
    })

    return NextResponse.json({ message: 'Sucesso' }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}