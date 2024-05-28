import { cn } from "@/lib/utils";
import { convertToLocalDateTime } from "@/utils/convert-to-local-date-time";
import React from "react";

export default function PageSubtitle({
  subTitle,
  startTime,
  endTime,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center text-sm text-slate-900",
        className
      )}
    >
      <div className="mr-1 font-medium">{subTitle}</div>
      <div className="font-mono text-xs font-light">
        ({convertToLocalDateTime(startTime)} - {convertToLocalDateTime(endTime)}
        )
      </div>
    </div>
  );
}
