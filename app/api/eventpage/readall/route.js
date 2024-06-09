import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { EventModel } from "../../../utils/schemaModels"

export async function GET() {
    try{
        await connectDB()
        const allItems = await EventModel.find() 
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: allItems})
    }catch(err){
        return NextResponse.json({message: "アイテム読み取り失敗（オール）"})
    }
}

export async function POST(request) {
    const reqBody = await request.json()

    try{
        await connectDB()
        await EventModel.create(reqBody)
        return NextResponse.json({message: "アイテム作成成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム作成失敗"}) 
    }
}

export const revalidate = 0