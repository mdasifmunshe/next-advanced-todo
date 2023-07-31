import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Read
export async function GET(request, { params: { slug } }) {
  const id = slug;

  try {
    const todoById = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(todoById, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: 'No Todo Found', error }, { status: 400 });
  }
}

// Update
export async function PUT(request, { params }) {
  const id = params.slug;
  const { title, description } = await request.json();

  try {
    const updatedUser = await prisma.todo.update({
      where: { id: Number(id) },
      data: { title, description },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: 'No Todo Found', error }, { status: 400 });
  }
}

// Delete
export async function DELETE(request, { params }) {
  const id = params.slug;

  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { msg: `${deletedTodo.title} has been successfully deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ data: 'No Todo Found', error }, { status: 400 });
  }
}
