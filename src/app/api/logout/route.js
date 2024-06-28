import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  // Clear the cookies
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
  return NextResponse.json({ message: "Logged out successfully" });
};
