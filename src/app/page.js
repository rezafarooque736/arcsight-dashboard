// import shadcn ui components library
import React from "react";

// import custom components
import PageTitle from "@/components/page-title";
import GraphContainer from "@/components/graph/graph-container";
import {
  getBlockedPoliciesOfLast24h,
  getActionAlertedOfLast24h,
  getAllPolicyStatusOfLast24h,
} from "@/actions";
import { convertToLocalDateTime } from "@/utils/convert-to-local-date-time";
import { dashboard1 } from "@/data/dashboard1";
import { dashboard2 } from "@/data/dashboard2";
import { dashboard3 } from "@/data/dashboard3";

export const dynamic = "force-dynamic";

const Home = async () => {
  // const blockedPoliciesOfLast24h = await getBlockedPoliciesOfLast24h();
  const blockedPoliciesOfLast24h = dashboard1;
  // const actionAlertedOfLast24h = await getActionAlertedOfLast24h();
  const actionAlertedOfLast24h = dashboard2;
  // const allPolicyStatusOfLast24h = await getAllPolicyStatusOfLast24h();
  const allPolicyStatusOfLast24h = dashboard3;

  return (
    <div className="flex flex-col w-full h-full gap-2">
      {/* page title */}
      <div className="flex items-center justify-between">
        <PageTitle title="Web Application Security Dashboard" />
        <p className="font-serif text-base">
          Data last refreshed :{" "}
          <span className="text-sm text-gray-700">
            {convertToLocalDateTime(blockedPoliciesOfLast24h.data.timestamp)}
          </span>
        </p>
      </div>

      {/* graph */}
      <section className="grid w-full h-full grid-cols-1 gap-2 transition-all lg:grid-cols-2">
        <div className="grid grid-rows-2 gap-2">
          <GraphContainer dashboardData={blockedPoliciesOfLast24h} id={1} />
          <GraphContainer dashboardData={actionAlertedOfLast24h} id={2} />
        </div>
        <div>
          <GraphContainer dashboardData={allPolicyStatusOfLast24h} id={3} />
        </div>
      </section>
    </div>
  );
};

export default Home;
