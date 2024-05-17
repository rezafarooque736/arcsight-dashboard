// import ui library shadcn components
import React from "react";

// import custom components
import PageTitle from "@/components/page-title";
import { dashboard1 } from "@/data/dashboard1";
import GraphContainer from "@/components/graph/graph-container";
import { dashboard2 } from "@/data/dashboard2";
import { dashboard3 } from "@/data/dashboard3";
import { generateArcsightToken } from "@/utils/generate-arcsight-token";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      {/* page title */}
      <PageTitle title="Dashboard" />

      {/* graph */}
      <section className="grid w-full h-full grid-cols-1 gap-2 transition-all lg:grid-cols-2">
        <div className="grid grid-rows-2 gap-2">
          <GraphContainer dashboardData={dashboard1} id={1} />
          <GraphContainer dashboardData={dashboard2} id={2} />
        </div>
        <div>
          <GraphContainer dashboardData={dashboard3} id={3} />
        </div>
      </section>
    </div>
  );
};

export default Home;
