import connectMongoDB from "@/lib/dbConnect";
import MyMovie from "@/models/my_movie";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des,movie_type} = await request.json();
    

    await connectMongoDB();
    await MyMovie.create({movie_name,movie_url,movie_des,movie_type})
    return NextResponse.json({message:"My Movie Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const my_movie = await MyMovie.find()
    return NextResponse.json({my_movie})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await MyMovie.findByIdAndDelete(id);
    return NextResponse.json({message: "My Movie deleted"},{status:200})
}