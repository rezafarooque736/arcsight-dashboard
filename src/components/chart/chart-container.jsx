"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import BarChart from "./bar-chart";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export const ChartContainer = ({ chartData, id, title, chartLabel }) => {
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => router.refresh(), 180000); // 300000 milliseconds = 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full p-1">
      <div className="font-sans text-base font-medium">{title}</div>
      <Separator />
      <div className="h-full p-0">
        {/* chart */}
        <BarChart chartData={chartData} chartLabel={chartLabel} id={id} />
      </div>
    </div>
  );
};

export default ChartContainer;
