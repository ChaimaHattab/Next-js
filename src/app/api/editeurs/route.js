import { HttpStatusCode } from 'axios';

import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Editeur from '@/app/models/Editeur';


export async function POST(req) {

    try {
    await connectDB();
    const body = await req.json();
    if (body.maisonedit) {
    const editeur = await Editeur.create(body);
    return NextResponse.json(
    { editeur, message: 'Your author has been created' },
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
        const editeurs = await Editeur.find();
        return NextResponse.json({ editeurs });
        } catch (error) {
        return NextResponse.json({ error });
        }
        }
    
    