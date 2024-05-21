import { HttpStatusCode } from 'axios';

import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Livre from '@/app/models/Livre';


export async function POST(req) {

    try {
    await connectDB();
    const body = await req.json();
    if (body.isbn) {
    const livre = await Livre.create(body);
    return NextResponse.json(
    { livre, message: 'Your author has been created' },
    { status: HttpStatusCode.Created },
    );
    }
    return NextResponse.json({ message: 'Author name is missing' }, {
    status: HttpStatusCode.BadRequest });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }
    export async function GET() {

        try {
        await connectDB();
        const livres = await Livre.find();
        return NextResponse.json(livres);
        } catch (error) {
        return NextResponse.json({ error });
        }
        }
    
    