import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { verifyPassword } from "../../lib/bcrypt";

const prisma = new PrismaClient()

export const POST = async (request) => {
  //const navigate = useRouter()
  const body = await request.json()
  console.log(body)
  const { email, password } = body.data
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 400 })

    const isPassword = await verifyPassword(password, user.password)

    if (!isPassword) return NextResponse.json({ error: 'Password is invalid' }, { status: 400 })

    //navigate.push('/', user)

    return NextResponse.json(user)

  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })

  }
} 