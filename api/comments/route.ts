import { comments } from "@/app/data/comments";

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function GET() {
//     return Response.json(comments);
//   }

  export async function GET() {
    return NextResponse.json(comments)
  }

  export async function POST(request: Request, context: any){
    const params = context;
    const data = await request.json();
    console.log('data: ', data);
    const newComment = {
      id: comments.length + 1,
      name: data.name,
      text: data.text
    }

    comments.push(newComment);
    return NextResponse.json({
      comments
    })
  }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     const comment = req.body.comment;
//     const newComment = {
//         id: comments.length + 1,
//         text: comment,
//     }
//     if (newComment && newComment.text) {
//         comments.push(newComment);
//         return res.status(200).json(newComment);
//     }
//     return res.status(400).json({ error: 'Invalid comment' });

// }
