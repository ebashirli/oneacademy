import { NextRequest, NextResponse } from "next/server";

const socials: { [key: string]: string } = {
  facebook: "https://www.facebook.com/oneacademies",
  instagram: "https://www.instagram.com/oneacademy_masalli",
  tiktok: "https://www.tiktok.com/@oneacademy_masalli",
  youtube: "https://www.youtube.com/@oneacademy_az",
  whatsapp: `https://wa.me/994513886411?text=I'm%20interested%20in%20your%20car%20for%20sale`,
  address:
    "https://www.google.com/maps/place/ONE+Academy/@39.0341552,48.6677413,219m/data=!3m1!1e3!4m6!3m5!1s0x402323998f6c81a5:0x8bc3cf93099b9735!8m2!3d39.0343889!4d48.6675238!16s%2Fg%2F11kj4q7lw8?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  phone: "tel:+994513886411",
};

type Params = {
  params: {
    social: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { social } = params;
  if (socials[social]) {
    return NextResponse.redirect(socials[social]);
  } else {
    // If the social platform is not found, return a 404 response
    return NextResponse.json(
      { error: "Social platform not found" },
      { status: 404 }
    );
  }
}
