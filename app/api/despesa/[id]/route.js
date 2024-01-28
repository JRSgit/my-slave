import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Despesa ==================================
export const GET = async (request, { params }) => {
  const { id } = params
  const authorId = parseInt(id)
  try {
    const despesas = await prisma.despesas.findMany({
      where: {
        authorId
      }
    })

    if (!despesas) {
      return NextResponse.json({ message: "Não há dados para esse usuario" })
    }

    return NextResponse.json(despesas)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
export const DELETE = async (request, { params }) => {
  const { id } = params
  const Id = parseInt(id)
  try {
    await prisma.despesas.delete({
      where: {
        id: Id
      }
    })

    return NextResponse.json({ message: 'Sucesso' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}