import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
    const data = await req.json();
    const {fullName, email, mobileNumber, subject, message} = data;

    try{
        const saved = await prisma.message.create({
            data:{
                fullName, email, mobileNumber, subject, message
            },
        });
    } catch(error){
        return NextResponse.json({success: false, error: 'Failed to save message...'})
    }
}