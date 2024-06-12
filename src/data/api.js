export const getQueryViewerData = async () => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/dashboard/arcsight/detect-api/rest/queryviewers`,
      {
        next: { revalidate: 0 }, //time in seconds to revalidate cache
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
    const res = await fetch(`http://localhost:8000/api/v1/dashboard/hpsm`, {
      next: { revalidate: 0 }, //time in seconds to revalidate cache
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
