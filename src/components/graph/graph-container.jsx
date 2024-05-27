"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import BarGraph from "./bar-graph";
import React, { useEffect } from "react";
import GraphHeader from "./graph-header";
import GraphDescription from "./graph-description";
import { useRouter } from "next/navigation";
import GraphDescriptionAllPolicy from "./graph-description-all-policy";

export const GraphContainer = ({ dashboardData, id, indexAxis }) => {
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => router.refresh(), 180000); // 300000 milliseconds = 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  const rows = dashboardData.data.rows;

  const graphData = rows.reduce((acc, currValue) => {
    acc.push(Number(currValue.value[1]));
    return acc;
  }, []);

  const graphLabel = rows.reduce((acc, currValue) => {
    acc.push(currValue.value[0].replace("/Common/", ""));
    return acc;
  }, []);

  return (
    <Card className="w-full h-full p-1 border-2 border-gray-400">
      <CardHeader className="py-0 pl-1">
        <CardTitle>
          {/* graph header */}
          <GraphHeader
            title={dashboardData.name}
            startTime={dashboardData.data.startTimestamp}
            endTime={dashboardData.data.endTimestamp}
          />
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="h-full py-1 pl-1">
        {/* graph description */}
        {indexAxis === "y" ? (
          <GraphDescription graphDesc={dashboardData?.graphDesc} />
        ) : (
          <GraphDescriptionAllPolicy graphDesc={dashboardData?.graphDesc} />
        )}

        {/* graph */}
        <BarGraph
          graphData={graphData}
          graphLabel={graphLabel}
          id={id}
          indexAxis={indexAxis}
        />
      </CardContent>
    </Card>
  );
};

export default GraphContainer;
