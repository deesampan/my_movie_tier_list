import connectMongoDB from "@/lib/dbConnect";
import Cartoon from "@/models/cartoon";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des,rank} = await request.json();
    
    console.log("this is rank : ", rank);

    await connectMongoDB();
    await Cartoon.create({movie_name,movie_url,movie_des,rank})
    return NextResponse.json({message:"Movie Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const Cartoons = await Cartoon.find()
    return NextResponse.json({Cartoons})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Cartoon.findByIdAndDelete(id);
    return NextResponse.json({message: "Movie deleted"},{status:200})
}