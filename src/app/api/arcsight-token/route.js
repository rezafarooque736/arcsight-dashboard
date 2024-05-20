import { NextResponse } from "next/server";

import https from "https";
import fetch from "node-fetch";
import { DOMParser } from "xmldom";

export const revalidate = 1800;

export async function GET() {
  // Create an HTTPS agent that ignores SSL certificate errors
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const response = await fetch(process.env.GENERATE_ARCSIGHT_TOKEN_URL, {
      agent,
    });

    const xmlString = await response.text();

    // Parse the XML string using xmldom
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // Extract the value inside the <ns3:return> tag
    const token = xmlDoc.getElementsByTagName("ns3:return")[0].textContent;

    return NextResponse.json(token, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          "Error while getting data from /www/core-service/rest/LoginService/login api",
        err,
      },
      { status: 500 }
    );
  }
}
