export const getQueryViewerData = async (resource_id) => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/v1/dashboard/detect-api/rest/queryviewers/${resource_id}`,
      {
        next: { revalidate: 300000 },
      }
    );

    if (!res.ok) {
      throw new Error(
        "Error while getting data from /api/detect-api/rest/queryviewers"
      );
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
    return (
      "Error while getting data from backend /api/detect-api/rest/queryviewers",
      error
    );
  }
};
