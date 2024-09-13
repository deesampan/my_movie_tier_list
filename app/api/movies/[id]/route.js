import connectMongoDB from "@/lib/dbConnect";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    console.log({id});
    const {newName : movie_name, newUrl : movie_url,newDes: movie_des,newRank: rank} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{movie_name,movie_url,movie_des,rank});
    return NextResponse.json({message:"Movie Updated"},{status:200});
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({topic},{status:200})
}