// import shadcn ui components library
import React, { Suspense } from "react";

// import custom components
import PageTitle from "@/components/page-title";
import { getQueryViewerData } from "@/data/api";
import ChartDescription from "@/components/chart/chart-description";
import PageSubtitle from "@/components/page-subtitle";
import RadialGradient from "@/components/magicui/radial-gradient";
import Loading from "./loading";
import LineChartContainer from "@/components/chart/line-chart-container";
import { Separator } from "@/components/ui/separator";

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
        startTime={allPolicyStatusOfLast24h?.startTimestamp}
        endTime={allPolicyStatusOfLast24h?.endTimestamp}
      />

      {/* chart chart */}
      <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {/* Passed chart */}
        <div className="relative pr-3 border border-gray-400 rounded-lg bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Passed
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<Loading />}>
            <LineChartContainer
              data={allPolicyStatusOfLast24h?.passed}
              categories={["passedCurr"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#dcfce7" size={100} />
        </div>

        {/* Alerted chart */}
        <div className="relative pr-3 border border-gray-400 rounded-lg bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Alerted
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<Loading />}>
            <LineChartContainer
              data={allPolicyStatusOfLast24h?.alerted}
              categories={["alertedCurr"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#dcfce7" size={100} />
        </div>

        {/* Blocked chart */}
        <div className="relative pr-3 border border-gray-400 rounded-lg bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Blocked
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<Loading />}>
            <LineChartContainer
              data={allPolicyStatusOfLast24h?.blocked}
              categories={["blockedCurr"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#dcfce7" size={100} />
        </div>
      </section>

      {/* chart description */}
      <ChartDescription chartDesc={allPolicyStatusOfLast24h?.chartDesc} />
    </div>
  );
};

export default Home;
