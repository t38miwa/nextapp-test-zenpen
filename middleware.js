import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzIdsfewwefwwfdtYWlsLmNvbSIsImV4cCI6MTcwMDIxMzk3MH0.tpJYWZgjbrR3gdR_5qA9hc4oo9k7-iYBsQGhy3zK2FU"
    
    //await request.headers.get("Authorization")?.split(" ")[1]
    
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-app-book") 
        const decodedJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch(err){
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}