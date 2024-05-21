import { HttpStatusCode } from 'axios';



import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import Specialite from '@/app/models/Specialite';

export async function GET(_, { params }) {
try {
await connectDB();
const specialite = await Specialite.findById(params.id);
if (specialite) {
return NextResponse.json({ specialite  });
}
return NextResponse.json({ message: `Specialite  ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}


export async function PUT(req, { params }) {

    try {
    await connectDB();
    const specialite  = await Specialite .findById(params.id);
    if (specialite) {
    const body= await req.json();
    specialite.nomspecialite = body.nomspecialite;
   
    specialite.save();
    return NextResponse.json({ specialite });
    }
    return NextResponse.json({ message: `Specialite ${params.id} not found`
    
    }, { status: HttpStatusCode.NotFound });
    
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    
    HttpStatusCode.BadRequest });
    
    }
    }



    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const specialite = await Specialite.findById(params.id);
        if (specialite) {
        await Specialite.findByIdAndDelete(specialite._id);
        return NextResponse.json({ message: `Specialite ${params.id} has been
        
        deleted` });
        }
        return NextResponse.json({ message: `Specialite ${params.id} not found` }, {
            status: HttpStatusCode.NotFound });
            } catch (error) {
            return NextResponse.json({ message: error }, { status:
            HttpStatusCode.BadRequest });
            }
            }