// import shadcn ui components library
import React, { Suspense } from "react";

// import custom components
import PageTitle from "@/components/page-title";
import ChartContainer from "@/components/chart/chart-container";
import { getQueryViewerData } from "@/data/api";
import ChartDescription from "@/components/chart/chart-description";
import PageSubtitle from "@/components/page-subtitle";
import RadialGradient from "@/components/magicui/radial-gradient";
import { BorderBeam } from "@/components/magicui/border-beam";

const Home = async () => {
  const allPolicyStatusOfLast24h = await getQueryViewerData(
    process.env.RESOURCE_ID_ALL_POLICY_STATUS_OF_LAST_24H
  );

  return (
    <div className="flex flex-col w-full max-h-full gap-2 overflow-x-hidden">
      {/* page title */}
      <div className="flex items-center justify-between -mt-1 -mb-2">
        <PageTitle title="Web Application Security Dashboard" />
        <p className="font-serif text-base">
          Data last refreshed :{" "}
          <span className="text-sm text-gray-700">
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>

      {/* page subtitle */}
      <PageSubtitle
        subTitle={"All Policy Status the Last 24 Hours"}
        startTime={allPolicyStatusOfLast24h.startTimestamp}
        endTime={allPolicyStatusOfLast24h.endTimestamp}
      />

      {/* chart chart */}
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative border border-gray-300 rounded-lg bg-background">
          <Suspense
            fallback={<div className="grid place-items-center">Loading...</div>}
          >
            <ChartContainer
              chartData={allPolicyStatusOfLast24h?.chartDesc.map(
                (item) => item.passed
              )}
              chartLabel={allPolicyStatusOfLast24h?.chartDesc.map((item) =>
                item.policy.replace("/Common/", "")
              )}
              title="Passed"
              id={1}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#dcfce7" size={100} />
          <BorderBeam
            size={250}
            duration={12}
            delay={9}
            colorFrom="#22c55e"
            colorTo="#86efac"
          />
        </div>

        <div className="relative border border-gray-300 rounded-lg bg-background">
          <Suspense
            fallback={<div className="grid place-items-center">Loading...</div>}
          >
            <ChartContainer
              chartData={allPolicyStatusOfLast24h?.chartDesc.map(
                (item) => item.alerted
              )}
              chartLabel={allPolicyStatusOfLast24h?.chartDesc.map((item) =>
                item.policy.replace("/Common/", "")
              )}
              title="Alerted"
              id={2}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#fef9c3" size={100} />
          <BorderBeam
            size={250}
            duration={12}
            delay={7}
            colorFrom="#eab308"
            colorTo="#fde047"
          />
        </div>

        <div className="relative border border-gray-300 rounded-lg bg-background">
          <Suspense
            fallback={<div className="grid place-items-center">Loading...</div>}
          >
            <ChartContainer
              chartData={allPolicyStatusOfLast24h?.chartDesc.map(
                (item) => item.blocked
              )}
              chartLabel={allPolicyStatusOfLast24h?.chartDesc.map((item) =>
                item.policy.replace("/Common/", "")
              )}
              title="Blocked"
              id={3}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#fee2e2" size={100} />
          <BorderBeam
            size={250}
            duration={13}
            delay={9}
            colorFrom="#ef4444"
            colorTo="#fca5a5"
          />
        </div>
      </section>

      {/* chart description */}
      <ChartDescription chartDesc={allPolicyStatusOfLast24h?.chartDesc} />
    </div>
  );
};

export default Home;
