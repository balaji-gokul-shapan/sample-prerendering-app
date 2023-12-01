'use client';
import React, { useState } from 'react';
import Button from '@/app/components/button';
import Link from 'next/link';

interface Comments {
  id: number;
  name: string;
  text: string;
}

const Comments = () => {
  const userId = window.location.pathname.split('/')[2];

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleGoBack = () => {};
  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    console.log('data: ', data);
    setComments(data);
  };

  const submitComments = async () => {
    if (!comment) {
      return alert('Please enter a comment');
    }

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ text: comment }),
      body: JSON.stringify({ name: 'jane', text: comment }),
    });
    const data = await response.json();
    console.log('data: ', data);
  };

  const Comment = async (id: number) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: '',
    });
    const data = await response.json();
    console.log('data: ', data);
    fetchComments();
  };

  return (
    <>
      {/* <button onClick={handleGoBack}>Go Back</button> */}
      {/* <Link href={`${userId}`}>Back</Link> */}

      <h1>Comments</h1>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <Button text={'Submit Comments'} onClick={submitComments} />
      <Button text={'Load Comments'} onClick={fetchComments} />

      {comments &&
        comments.map((item: Comments) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <Button
              text={' Comment'}
              onClick={() => Comment(item.id)}
            />
          </div>
        ))}
    </>
  );
};

export default Comments;
