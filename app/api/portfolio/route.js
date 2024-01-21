import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {

    await connectMongo();

    const body = await req.json();

    if (!body.portfolio) {
        return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    try {
        const portfolio = await JSON.parse(JSON.stringify(body.portfolio));

        console.log("portfolio: " + portfolio)
        const email = body.email;
        const filter = { email };
        const update = { $set: { portfolio: portfolio, username: portfolio.username } };
        const options = { new: true };

        const updatedUser = await User.findOneAndUpdate(filter, update, options);

        return NextResponse.json({ updatedUser }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
