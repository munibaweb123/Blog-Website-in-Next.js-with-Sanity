'use client';

import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState<string>(''); // Name field
  const [newComment, setNewComment] = useState<string>(''); // Comment field
  const [editComment, setEditComment] = useState<string | null>(null); // For tracking edit state

  const handleAddComment = () => {
    if (newComment.trim() && newName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        name: newName,
        comment: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setNewName('');
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.comment);
      setNewName(commentToEdit.name);
      setEditComment(commentID);
    }
  };

  const handleSaveEditComment = () => {
    if (newComment.trim() && newName.trim() && editComment) {
      const updatedComments = comments.map((comment) =>
        comment.id === editComment
          ? { ...comment, comment: newComment, name: newName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setNewName('');
      setEditComment(null);
    }
  };

  const handleDeleteComment = (commentID: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentID);
    setComments(updatedComments);
  };

  return (
    <div className="m-8 shadow-md">
      <h2 className="font-bold text-2xl p-4">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.name}</div>
                <p>{comment.comment}</p>
                <div className="flex space-x-2 mt-2">
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-blue-500 m-4"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-500 m-4"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-400 p-4">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Your comment"
          className="w-full mb-2"
        />
        <Button
          onClick={editComment ? handleSaveEditComment : handleAddComment}
          className="m-4"
        >
          {editComment ? 'Save' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
