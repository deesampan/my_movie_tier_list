import connectMongoDB from "@/lib/dbConnect";
import MyCartoon from "@/models/my_cartoon";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des} = await request.json();
    

    await connectMongoDB();
    await MyCartoon.create({movie_name,movie_url,movie_des})
    return NextResponse.json({message:"My Cartoon Created"},{status:201});
}

export async function GET(){
    await connectMongoDB();
    const my_cartoon = await MyCartoon.find()
    return NextResponse.json({my_cartoon})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await MyCartoon.findByIdAndDelete(id);
    return NextResponse.json({message: "My Cartoon deleted"},{status:200})
}