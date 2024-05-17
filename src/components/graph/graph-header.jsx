import { convertToLocalDateTime } from "@/utils/convert-to-local-date-time";
import React from "react";

const GraphHeader = (props) => {
  return (
    <div className="flex flex-row items-center justify-between font-mono text-sm font-normal text-slate-800">
      <div>{props.title}</div>
      <div className="text-xs font-light">
        {convertToLocalDateTime(props.startTime)} -{" "}
        {convertToLocalDateTime(props.endTime)}
      </div>
    </div>
  );
};

export default GraphHeader;
