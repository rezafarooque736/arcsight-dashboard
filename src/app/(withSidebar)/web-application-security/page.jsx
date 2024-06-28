import React, { Suspense } from "react";

// import custom components
import PageTitle from "@/components/page-title";
import { getQueryViewerData } from "@/data/api";
import PageSubtitle from "@/components/page-subtitle";
import RadialGradient from "@/components/magicui/radial-gradient";
import { Separator } from "@/components/ui/separator";
import ArcsightAreaChart from "@/components/arcsight/arcsight-area-chart";
import ArcsightTable from "@/components/arcsight/arcsight-table";
import LoadingComponent from "@/components/loading-component";
import { getSession } from "@/utils/get-session";

export const metadata = {
  title: "WAF | Dashboard",
  description: "WAF Dashboard",
};

export const WebApplicationSecurityHomePage = async () => {
  let allPolicyStatusOfLast24h;
  const session = getSession();
  if (session) {
    // Fetch the web appication security data from API
    allPolicyStatusOfLast24h = await getQueryViewerData(
      "web-application-security"
    );
  }

  return (
    <div className="flex flex-col w-full gap-3">
      {/* page title */}
      <div className="flex items-center justify-between -mb-2">
        <PageTitle title="Web Application Security Dashboard" />
        <p className="font-mono text-base">
          Last refreshed :{" "}
          <span className="text-sm text-gray-700">
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>

      {/* page subtitle */}
      <PageSubtitle
        subTitle={"Traffic Insights"}
        subTitleSmall={"(last 24hrs & Comparison with weekly average)"}
        startTime={allPolicyStatusOfLast24h?.startTimestamp}
        endTime={allPolicyStatusOfLast24h?.endTimestamp}
      />

      {/* chart */}
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {/* Passed chart */}
        <div className="relative pr-3 border border-t-4 border-gray-400 rounded-lg border-t-green-500 bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Passed
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<LoadingComponent title="Passed" />}>
            <ArcsightAreaChart
              data={allPolicyStatusOfLast24h?.passed}
              categories={["passed_avg", "passed_curr"]}
              colors={["fuchsia", "green"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#dcfce7" size={75} />
        </div>

        {/* Alerted chart */}
        <div className="relative pr-3 border border-t-4 border-gray-400 rounded-lg border-t-yellow-500 bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Alerted
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<LoadingComponent title="Alerted" />}>
            <ArcsightAreaChart
              data={allPolicyStatusOfLast24h?.alerted}
              categories={["alerted_avg", "alerted_curr"]}
              colors={["sky", "yellow"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#fef9c3" size={75} />
        </div>

        {/* Blocked chart */}
        <div className="relative pr-3 border border-t-4 border-gray-400 rounded-lg border-t-red-500 bg-background">
          <span className="absolute leading-tight top-2 left-2 text-slate-700">
            Blocked
          </span>
          <Separator className="absolute top-7 bg-slate-400" />
          <Suspense fallback={<LoadingComponent title="Blocked" />}>
            <ArcsightAreaChart
              data={allPolicyStatusOfLast24h?.blocked}
              categories={["blocked_avg", "blocked_curr"]}
              colors={["stone", "red"]}
            />
          </Suspense>
          <RadialGradient origin="bottom left" from="#fee2e2" size={75} />
        </div>
      </section>

      {/* chart description */}
      <ArcsightTable chartDesc={allPolicyStatusOfLast24h?.chartDesc} />
    </div>
  );
};

export default WebApplicationSecurityHomePage;
