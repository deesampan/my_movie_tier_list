import connectMongoDB from "@/lib/dbConnect";
import MySeries from "@/models/my_serie";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des,movie_type} = await request.json();
    

    await connectMongoDB();
    await MySeries.create({movie_name,movie_url,movie_des,movie_type})
    return NextResponse.json({message:"My Series Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const my_serie = await MySeries.find()
    return NextResponse.json({my_serie})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await MySeries.findByIdAndDelete(id);
    return NextResponse.json({message: "My Series deleted"},{status:200})
}