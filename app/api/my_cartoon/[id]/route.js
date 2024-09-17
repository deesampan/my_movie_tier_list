import connectMongoDB from "@/lib/dbConnect";
import MyCartoon from "@/models/my_cartoon";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    const {newName : movie_name, newUrl : movie_url,newDes: movie_des} = await request.json();
    await connectMongoDB();
    await MyCartoon.findByIdAndUpdate(id,{movie_name,movie_url,movie_des});
    return NextResponse.json({message:"My Movie Updated"},{status:200});
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const my_cartoon = await MyCartoon.findOne({_id:id});
    return NextResponse.json({my_cartoon},{status:200})
}