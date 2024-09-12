import connectMongoDB from "@/lib/dbConnect";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const {movie_name,movie_url,movie_des} = await request.json();
    await connectMongoDB();
    await Topic.create({movie_name,movie_url,movie_des})
    return NextResponse.json({message:"Topic Created"},{status:201});
}