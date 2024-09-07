import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json(
        { error: 'OK!' },
        { status: 200 }
    );
}