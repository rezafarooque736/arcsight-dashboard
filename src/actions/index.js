"use server";

import https from "https";
import fetch from "node-fetch";

import { generateArcsightToken } from "@/utils/generate-arcsight-token";

// get Blocked Policies Of Last 24h
export async function getBlockedPoliciesOfLast24h() {
  // generate arcsight token
  const token = await generateArcsightToken();

  // Create an HTTPS agent that ignores SSL certificate errors
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const res = await fetch(process.env.URL_BLOCKED_POLICIES_OF_LAST_24H, {
      agent,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        "Error while getting data from getBlockedPoliciesOfLast24h api inside try block"
      );
    }

    return res.json();
  } catch (e) {
    throw new Error(
      "Error while getting data from getBlockedPoliciesOfLast24h api inside catch",
      e
    );
  }
}

// get Action Alerted Of Last 24h
export async function getActionAlertedOfLast24h() {
  // generate arcsight token
  const token = await generateArcsightToken();

  // Create an HTTPS agent that ignores SSL certificate errors
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const res = await fetch(process.env.URL_ACTION_ALERTED_OF_LAST_24H, {
      agent,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        "Error while getting data from getActionAlertedOfLast24h api inside try block"
      );
    }

    return res.json();
  } catch (e) {
    throw new Error(
      "Error while getting data from getActionAlertedOfLast24h api inside catch",
      e
    );
  }
}

// get All Policy Status Of Last 24h
export async function getAllPolicyStatusOfLast24h() {
  // generate arcsight token
  const token = await generateArcsightToken();

  // Create an HTTPS agent that ignores SSL certificate errors
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const res = await fetch(process.env.URL_ALL_POLICY_STATUS_OF_LAST_24H, {
      agent,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        "Error while getting data from getAllPolicyStatusOfLast24h api inside try block"
      );
    }

    return res.json();
  } catch (e) {
    throw new Error(
      "Error while getting data from getAllPolicyStatusOfLast24h api inside catch",
      e
    );
  }
}
