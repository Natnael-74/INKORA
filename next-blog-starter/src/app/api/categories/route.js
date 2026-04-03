import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.LOCAL_MONGO_DB}/categories`);
    const data = await res.json();
    return NextResponse.json({ categories: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to load categories" },
      { status: 500 },
    );
  }
}
