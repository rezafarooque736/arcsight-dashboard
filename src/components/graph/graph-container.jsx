import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import BarGraph from "./bar-graph";
import React from "react";
import GraphHeader from "./graph-header";
import GraphDescription from "./graph-description";

export const GraphContainer = ({ dashboardData, id }) => {
  const graphData = dashboardData.data.rows.reduce((acc, currValue) => {
    acc.push(Number(currValue.value[1]));
    return acc;
  }, []);

  const graphLabel = dashboardData.data.rows.reduce((acc, currValue) => {
    acc.push(currValue.value[0]);
    return acc;
  }, []);

  return (
    <Card>
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
      <CardContent className="py-1 pl-1">
        {/* graph description */}
        <GraphDescription
          columnHeaders={dashboardData.data.columnHeaders}
          rows={dashboardData.data.rows}
        />

        {/* graph */}
        <BarGraph graphData={graphData} graphLabel={graphLabel} id={id} />
      </CardContent>
    </Card>
  );
};

export default GraphContainer;
