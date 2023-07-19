import { NextResponse } from "next/server";


export async function GET() {

    return NextResponse.json({
        data: "Welcome to the portifolio api."
    })
}

