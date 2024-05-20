export const getQueryViewerData = async (resource_id) => {
  try {
    const res = await fetch(
      `${process.env.WEB_URL}/api/detect-api/rest/queryviewers/${resource_id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        "Error while getting data from /api/detect-api/rest/queryviewers"
      );
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return (
      "Error while getting data from backend /api/detect-api/rest/queryviewers",
      error
    );
  }
};
