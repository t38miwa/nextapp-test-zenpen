import { NextResponse } from "next/server";
import connectDB from "./../../utils/database";
// @ts-expect-error TS(2305): Module '"./../../utils/schemaModels"' has no expor... Remove this comment to see the full error message
import { NotificationModel } from "./../../utils/schemaModels";

export async function GET() {
    try {
        await connectDB();
        const notifications = await NotificationModel.find();
        return NextResponse.json({ notifications });
    } catch (err) {
        return NextResponse.json({ error: "通知の取得に失敗しました" });
    }
}
