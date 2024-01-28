import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================

export const GET = async () => {
  try {
    const allDespesas = await prisma.despesas.findMany()

    return NextResponse.json(allDespesas)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// =============================================
export const POST = async (request) => {
  const body = await request.json()

  const { title, valor, authorId } = body
  try {
    const despesa = await prisma.despesas.create({
      data: {
        title,
        valor,
        authorId
      }

    })
    return NextResponse.json(despesa)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// ============================================

