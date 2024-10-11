import { NextRequest, NextResponse } from "next/server";

const forms: { [key: string]: string } = {
  register: "https://forms.gle/bKCvrLuzvqsX6KoS7",
  apply: "https://forms.gle/KeMBUDQ3ETPByJ279",
};

type Params = {
  params: {
    form: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { form } = params;
  if (forms[form]) {
    return NextResponse.redirect(forms[form]);
  } else {
    return NextResponse.json(
      { error: "Social platform not found" },
      { status: 404 }
    );
  }
}
