import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken) {
    redirect("/");
  }

  return accessToken;
};
