import https from "https";
import fetch from "node-fetch";
import { DOMParser } from "xmldom";

// Function to fetch the token
export async function generateArcsightToken() {
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

    // Output the token
    return token;
  } catch (error) {
    console.error("Error fetching Arcsight token:", error);
  }
}
