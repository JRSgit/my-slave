import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================
export const GET = async (request, { params }) => {
  const { id } = params
  const authorId = parseInt(id)
  try {
    const receitas = await prisma.receita.findMany({
      where: {
        authorId
      }
    })
    if (!receitas) {
      return NextResponse.json({ message: "Não há dados para esse usuario" })
    }

    return NextResponse.json(receitas)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}

export const DELETE = async (request, { params }) => {
  const { id } = params
  const Id = parseInt(id)
  try {
    await prisma.receita.delete({
      where: {
        id: Id
      }
    })

    return NextResponse.json({ message: 'Sucesso' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}