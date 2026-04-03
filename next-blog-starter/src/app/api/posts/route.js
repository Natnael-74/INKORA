import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.LOCAL_MONGO_DB}/posts`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to load posts");
    }

    if (data.length === 0) {
      return NextResponse.json({ posts: [] }, { status: 200 });
    }

    return NextResponse.json({ posts: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 },
    );
  }
}
