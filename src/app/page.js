// import shadcn ui components library
import React from "react";

// import custom components
import PageTitle from "@/components/page-title";
import GraphContainer from "@/components/graph/graph-container";
import { convertToLocalDateTime } from "@/utils/convert-to-local-date-time";
import { getQueryViewerData } from "@/data/api";

const Home = async () => {
  const blockedPoliciesOfLast24h = await getQueryViewerData(
    process.env.RESOURCE_ID_BLOCKED_POLICIES_OF_LAST_24H
  );
  const actionAlertedOfLast24h = await getQueryViewerData(
    process.env.RESOURCE_ID_ACTION_ALERTED_OF_LAST_24H
  );
  const allPolicyStatusOfLast24h = await getQueryViewerData(
    process.env.RESOURCE_ID_ALL_POLICY_STATUS_OF_LAST_24H
  );

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
