import { HttpStatusCode } from 'axios';



import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Livre from '@/app/models/Livre';

export async function GET(_, { params }) {
try {
await connectDB();
const livre = await Livre.findById(params.id);
if (livre) {
return NextResponse.json({ livre });
}
return NextResponse.json({ message: `Livre ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}


export async function PUT(req, { params }) {

    try {
    await connectDB();
    const livre = await Livre.findById(params.id);
    if (livre) {
    const body= await req.json();
    livre.isbn = body.isbn;
    livre.titre = body.titre;
    livre.annedition = body.annedition;
    livre.prix = body.prix;
    livre.qtestock = body.qtestock;
    livre.couverture = body.couverture;
    livre.save();
    return NextResponse.json({ livre });
    }
    return NextResponse.json({ message: `Livre ${params.id} not found`
    
    }, { status: HttpStatusCode.NotFound });
    
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    
    HttpStatusCode.BadRequest });
    
    }
    }



    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const livre = await Livre.findById(params.id);
        if (livre) {
        await Livre.findByIdAndDelete(livre._id);
        return NextResponse.json({ message: `Livre ${params.id} has been
        
        deleted` });
        }
        return NextResponse.json({ message: `Livre ${params.id} not found` }, {
            status: HttpStatusCode.NotFound });
            } catch (error) {
            return NextResponse.json({ message: error }, { status:
            HttpStatusCode.BadRequest });
            }
            }