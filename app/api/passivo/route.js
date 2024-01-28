import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Receita ==================================

export const GET = async () => {
  try {
    const allPassivos = await prisma.passivos.findMany()

    return NextResponse.json(allPassivos)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// =============================================
export const POST = async (request) => {
  const body = await request.json()
  const { title, valor, author, authorId } = body
  try {
    const passivo = await prisma.passivos.create({
      data: {
        title,
        valor,
        author,
        authorId
      }

    })
    return NextResponse.json(passivo)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
// ============================================

