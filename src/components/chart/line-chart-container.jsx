"use client";

import { LineChart } from "@tremor/react";
import { useRouter } from "next/navigation";
import React from "react";

const LineChartContainer = ({ data, categories, colors }) => {
  const dataFormatter = (number) =>
    `${Intl.NumberFormat("en-IN").format(number).toString()}`;
  return (
    <div>
      <LineChart
        data={data}
        index="policy"
        categories={categories}
        colors={colors}
        className="h-72"
        yAxisWidth={83}
        valueFormatter={dataFormatter}
        rotateLabelX={{
          angle: 275,
          verticalShift: 50,
          xAxisHeight: 130,
        }}
      />
    </div>
  );
};

export default LineChartContainer;
