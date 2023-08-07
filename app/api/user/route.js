import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Create
export async function POST(request) {
  const { name, email, password } = await request.json();

  try {
    const addUser = await prisma.user.create({
      data: { name, email, password },
    });

    return NextResponse.json(addUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: 'Invalid user info', error }, { status: 400 });
  }
}

// Read
export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();

    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: 'No Users Found', error },
      { status: 400 }
    );
  }
}