"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { Separator } from "../ui/separator";
import Loading from "@/app/loading";
import { BarChart } from "@tremor/react";
import { useRouter } from "next/navigation";

export default function HPSMAreaChart({ countsBySubService }) {
  const subServiceArray = Object.entries(countsBySubService).map(
    ([subservice, details]) => ({ subservice, ...details })
  );
  const router = useRouter();

  useEffect(() => {
    let intervalId = setInterval(() => router.refresh(), 300000); //300 seconds, 5 minutes, time in milliseconds

    return () => clearInterval(intervalId);
  }, [router]);

  const dataFormatter = (number) =>
    `${Intl.NumberFormat("en-IN").format(number).toString()}`;

  return (
    <div className="relative pr-3">
      <span className="absolute text-lg font-medium leading-tight top-2 left-2 text-slate-700">
        Services Counts
      </span>
      <Separator className="absolute top-8 bg-slate-300" />
      <Suspense fallback={<Loading />}>
        <BarChart
          data={subServiceArray}
          index="subservice"
          categories={["total", "closed", "open"]}
          colors={["blue", "red", "green"]}
          className="h-[420px]"
          layout="vertical"
          showAnimation={true}
          yAxisWidth={90}
          valueFormatter={dataFormatter}
        />
      </Suspense>
    </div>
  );
}
