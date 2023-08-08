import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Read
export async function GET(request, { params: { slug } }) {
  const email = slug;

  try {
    const userByParam = await prisma.user.findUnique({
      where: { email: email },
      include: {
        todos: true,
      },
    });

    return NextResponse.json(userByParam, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: 'No User Found', error }, { status: 400 });
  }
}
