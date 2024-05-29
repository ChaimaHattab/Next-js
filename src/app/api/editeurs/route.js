import { HttpStatusCode } from 'axios';
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Editeur from '@/app/models/Editeur';



export async function POST(req) {
    try {
    const body = await req.json();
    const newEditeur = new Editeur(body)
    const editeur = await newEditeur.save();
    return NextResponse.json(
    { editeur, message: 'Your editor has been created' },
    { status: HttpStatusCode.Created },
    );
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }
    export async function GET() {

        try {
        await connectDB();
        const editeurs = await Editeur.find();
        return NextResponse.json( editeurs );
        } catch (error) {
        return NextResponse.json({ error });
        }
        }
    
    