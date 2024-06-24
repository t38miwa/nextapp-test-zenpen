import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function PUT(request: any, context: any) {
    const reqBody = await request.json()
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        if(singleItem.email === reqBody.email){
            await ItemModel.updateOne({_id: context.params.id}, reqBody)
            return NextResponse.json({message: "アイテム編集成功"})
        }else{
            return NextResponse.json({message: "他の人が作成したアイテムです"})
        }
    }catch(err){
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}