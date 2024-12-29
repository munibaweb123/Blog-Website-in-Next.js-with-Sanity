// api/comments/[id]/route.ts

import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Import your sanity client here

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    // Check if the comment exists in Sanity
    const comment = await client.fetch(`*[_type == "comment" && _id == $id][0]`, { id });

    if (!comment) {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }

    // Proceed with deleting the comment from Sanity
    await client.delete(id); // Sanity's delete function using the document's _id

    return NextResponse.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
