import { NextResponse } from 'next/server';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

const comments: Comment[] = []; // Simulated database

// GET Handler: Fetch all comments
export async function GET() {
  return NextResponse.json(comments, { status: 200 });
}

// POST Handler: Add a new comment
export async function POST(req: Request) {
  const { name, comment }: { name: string; comment: string } = await req.json();

  if (!name || !comment) {
    return NextResponse.json({ message: 'Name and comment are required' }, { status: 400 });
  }

  const newComment: Comment = {
    id: Math.random().toString(36).substr(2, 9), // Generate a random ID
    name,
    comment,
  };

  comments.push(newComment);

  return NextResponse.json(newComment, { status: 201 });
}
