import { cookies } from "next/headers";

export const getQueryViewerData = async (endpoint) => {
  try {
    const cookieStore = cookies();

    const { value: accessToken } = cookieStore.get("accessToken");
    const res = await fetch(
      `http://localhost:8000/api/v1/dashboard/arcsight/detect-api/rest/queryviewers/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 300 }, //time in seconds to revalidate cache
      }
    );

    if (!res.ok) {
      throw new Error(
        "Error while getting data from /api/detect-api/rest/queryviewers"
      );
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return (
      "Error while getting data from backend /api/detect-api/rest/queryviewers",
      error
    );
  }
};

export const getHPSMTicketingToolData = async () => {
  try {
    const cookieStore = cookies();

    const { value: accessToken } = cookieStore.get("accessToken");

    const res = await fetch(`http://localhost:8000/api/v1/dashboard/hpsm`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 300 }, //time in seconds to revalidate cache
    });

    if (!res.ok) {
      throw new Error("Error while getting data from /hpsm");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return "Error while getting data from backend /hpsm", error;
  }
};
