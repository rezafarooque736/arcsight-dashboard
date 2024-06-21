"use client";

import { AreaChart } from "@tremor/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ArcsightAreaChart({ data, categories, colors }) {
  const router = useRouter();

  useEffect(() => {
    let intervalId = setInterval(() => router.refresh(), 300_000); //300 seconds, 5 minutes, time in milliseconds

    return () => clearInterval(intervalId);
  }, [router]);

  const dataFormatter = (number) =>
    `${Intl.NumberFormat("en-IN").format(number).toString()}`;
  return (
    <div>
      <AreaChart
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
}
