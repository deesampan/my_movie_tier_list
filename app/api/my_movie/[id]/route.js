import connectMongoDB from "@/lib/dbConnect";
import MyMovie from "@/models/my_movie";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    console.log({id});
    const {newName : movie_name, newUrl : movie_url,newDes: movie_des,newType:movie_type} = await request.json();
    await connectMongoDB();
    await MyMovie.findByIdAndUpdate(id,{movie_name,movie_url,movie_des,movie_type});
    return NextResponse.json({message:"My Movie Updated"},{status:200});
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const my_movie = await MyMovie.findOne({_id:id});
    return NextResponse.json({my_movie},{status:200})
}