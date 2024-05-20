import { NextResponse } from "next/server";

import https from "https";
import fetch from "node-fetch";
import { generateArcsightToken } from "@/data/api";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const resource_id = params.resource_id;
  // generate arcsight token
  const token = await generateArcsightToken();

  // Create an HTTPS agent that ignores SSL certificate errors
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const res = await fetch(
      `https://${process.env.ARCSIGHT_IP}:${process.env.ARCSIGHT_PORT}/detect-api/rest/queryviewers/${resource_id}`,
      {
        agent,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        error:
          "Error while getting data from /detect-api/rest/queryviewer/[resource_id] api inside try block",
      });
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          "Error while getting data from /detect-api/rest/queryviewer/[resource_id] inside catch api",
        err,
      },
      { status: 500 }
    );
  }
}
