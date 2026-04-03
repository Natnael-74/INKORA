import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const POSTS_PER_PAGE = 3;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

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
