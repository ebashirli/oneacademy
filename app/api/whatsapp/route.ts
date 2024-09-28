import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    `https://wa.me/994513886411?text=I'm%20interested%20in%20your%20car%20for%20sale`
  );
}
