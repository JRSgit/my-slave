import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================
export const GET = async (request, { params }) => {
  const { id } = params
  const Id = parseInt(id)
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Id,
      },
      include: {
        receita: true,
        despesas: true,
        ativos: true,
        passivos: true
      }
    })

    return NextResponse.json(user)

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}