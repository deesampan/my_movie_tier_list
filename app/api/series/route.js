import connectMongoDB from "@/lib/dbConnect";
import Series from "@/models/series";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des,rank} = await request.json();
    
    console.log("this is rank : ", rank);

    await connectMongoDB();
    await Series.create({movie_name,movie_url,movie_des,rank})
    return NextResponse.json({message:"Movie Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const Seriess = await Series.find()
    return NextResponse.json({Seriess})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Series.findByIdAndDelete(id);
    return NextResponse.json({message: "Movie deleted"},{status:200})
}