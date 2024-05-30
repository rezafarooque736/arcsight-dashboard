import { cn } from "@/lib/utils";
import React from "react";

export default function PageSubtitle({
  subTitle,
  subTitleSmall,
  startTime,
  endTime,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-sm text-slate-900",
        className
      )}
    >
      <div className="flex items-center mr-1 font-medium underline">
        {subTitle}
        <p className="ml-1 text-xs">{subTitleSmall}</p>
      </div>
      <div className="font-mono text-xs font-light">
        ({startTime} - {endTime})
      </div>
    </div>
  );
}
