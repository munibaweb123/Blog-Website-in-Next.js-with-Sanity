import { NextResponse } from 'next/server';

// Define the type for a comment
interface Comment {
  id: string;
  name: string;
  comment: string;
}

// Define the DELETE handler
export async function DELETE(
  request: Request,
  context: { params: { id: string } } // Explicitly type the `params` correctly
) {
  const { id } = context.params; // Destructure `id` from `params`

  try {
    // Example in-memory database for comments with proper type
    const commentsDB: Comment[] = globalThis.commentsDB || []; // Type commentsDB as Comment[]

    // Find the index of the comment to be deleted
    const commentIndex = commentsDB.findIndex((comment) => comment.id === id);

    if (commentIndex === -1) {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }

    // Remove the comment from the database
    commentsDB.splice(commentIndex, 1);

    // Return a success message
    return NextResponse.json({ message: 'Comment deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
