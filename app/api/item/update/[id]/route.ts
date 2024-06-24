import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const reqBody = await request.json();
    try {
        await connectDB();
        const singleItem = await ItemModel.findById(params.id);

        if (singleItem && singleItem.email === reqBody.email) {
            await ItemModel.updateOne({ _id: params.id }, reqBody);
            return NextResponse.json({ message: "アイテム編集成功" });
        } else if (!singleItem) {
            return NextResponse.json({ message: "アイテムが見つかりません" });
        } else {
            return NextResponse.json({ message: "他の人が作成したアイテムです" });
        }
    } catch (err) {
        return NextResponse.json({ message: "アイテム編集失敗" });
    }
}
