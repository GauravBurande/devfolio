import connectMongo from "@/libs/mongoose";
// import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {

    await connectMongo();

    const body = await req.json();
    console.log("body", body);

    if (!body.username) {
        return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    try {
        const username = body.username
        console.log("username: " + username)
        // const user = await User.findOne({ username })

        // const portfolio = user.portfolio;
        // console.log("server portfolio: " + portfolio)
        return NextResponse.json();
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}