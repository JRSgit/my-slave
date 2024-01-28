import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================

export const GET = async () => {
  try {
    const allAtivos = await prisma.ativos.findMany()

    return NextResponse.json(allAtivos)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// =============================================
export const POST = async (request) => {
  const body = await request.json()
  const { title, valor, author, authorId } = body
  try {
    const ativo = await prisma.ativos.create({
      data: {
        title,
        valor,
        author,
        authorId
      }

    })
    return NextResponse.json(ativo)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// ============================================

