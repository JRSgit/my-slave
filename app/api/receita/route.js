import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================

export const GET = async () => {
  try {
    const allReceitas = await prisma.receita.findMany()

    return NextResponse.json(allReceitas)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// =============================================
export const POST = async (request) => {
  const body = await request.json()
  const { title, valor, authorId } = body
  console.log(body)
  try {
    const receita = await prisma.receita.create({
      data: {
        title,
        valor,
        authorId
      }

    })
    return NextResponse.json(receita)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// ============================================

