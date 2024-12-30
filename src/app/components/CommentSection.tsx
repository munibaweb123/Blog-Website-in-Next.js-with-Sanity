'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState<string>(''); // Name field
  const [newComment, setNewComment] = useState<string>(''); // Comment field
  const [loading, setLoading] = useState<boolean>(false); // For loading state

  // Fetch comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('/api/comments');
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data: Comment[] = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  // Handle submitting a new comment
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newName.trim() || !newComment.trim()) {
      alert('Both name and comment fields are required!');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName, comment: newComment }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      const data: Comment = await response.json();

      // Add the new comment to the local state
      setComments((prevComments) => [
        { id: data.id, name: data.name, comment: data.comment },
        ...prevComments,
      ]);

      setNewName('');
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (id: string) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to delete comment: ${errorData.message}`);
      }

      // Update the UI by removing the deleted comment
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error(error);
      alert('Failed to delete comment');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Your name"
          className="p-2 border border-gray-300 rounded-lg bg-white"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={4}
          className="p-2 border border-gray-300 rounded-lg bg-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <p className="text-sm font-semibold text-gray-700">{comment.name}</p>
              <p className="text-gray-600 mt-1">{comment.comment}</p>
            </div>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500 text-sm font-bold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
