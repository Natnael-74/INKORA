import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_MONGO_DB}/posts/${req.params.slug}`,
    );
    const data = await res.json();

    if (!res.ok) {
      notFound();
      //   throw new Error("Failed to load post");
    }

    if (data.length === 0) {
      return NextResponse.json({ post: [] }, { status: 200 });
    }

    return NextResponse.json({ post: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to load post" }, { status: 500 });
  }
}
