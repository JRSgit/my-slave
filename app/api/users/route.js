import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { passwordHash } from "../../lib/bcrypt";

const prisma = new PrismaClient()

export const POST = async (request) => {
  const body = await request.json()
  const { name, password, email } = body

  const hash = await passwordHash(password)
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        createdAt: new Date()
      }

    })
    return NextResponse.json(user)

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

