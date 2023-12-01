import { comments } from '@/app/data/comments';
import { NextResponse } from 'next/server';

export async function GET(  request: Request,{ params }: { params: { commentsId: string } }) {
  const slug = params.commentsId;

  const response = comments.find((comment) => comment.id === parseInt(slug));
  return NextResponse.json(response);
}

export  async function ( request: Request,{ params }: { params: { commentsId: string } }) {
  const slug = params.commentsId;
  const Comment = comments.find((comment) => comment.id === parseInt(slug));
  const index = comments.findIndex((comment)=> comment.id === parseInt(slug));
  comments.splice(index,1)
  return NextResponse.json(Comment);

};

// const comment = comments.find((comment) => comment.id === parseInt(commentsId));
// if (comment) {
//   return NextResponse.json(comment);
// } else {
//   return NextResponse.json({ error: 'Comment not found' });
// }
