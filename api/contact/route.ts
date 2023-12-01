import { NextResponse } from "next/server";

interface Contact {
    name: string;
    email: string;
    message: string;
}
export async function POST(request: Request) {
    const response:Contact =  await request.json();
    const { name, email, message } = response;
    return NextResponse.json({ name, email, message } )
    
}

