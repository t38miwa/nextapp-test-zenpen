
{/*
import { NextResponse } from "next/server"
import connectDB from "../../utils/database"
import { AddressModel } from "../../utils/schemaModels"

export async function POST(request) {
    const reqBody = await request.json()
    try{
        await connectDB()
        await AddressModel.create(reqBody)
        return NextResponse.json({message: "アイテム作成成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム作成失敗"}) 
    }
}
*/}

import { NextResponse } from 'next/server';
import connectDB from '../../utils/database';
import { AddressModel } from '../../utils/schemaModels';

// GETリクエスト：住所データを取得
export async function GET() {
    try {
        await connectDB();
        const singleItem = await AddressModel.find();  // 住所データを取得
        console.log(singleItem);
        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem});  // 住所データをJSON形式で返す
    } catch (err) {
        console.error(err);
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"});
    }
}