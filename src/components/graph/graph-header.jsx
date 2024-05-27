import { convertToLocalDateTime } from "@/utils/convert-to-local-date-time";
import React from "react";

const GraphHeader = (props) => {
  return (
    <div className="flex flex-row items-center justify-between text-sm text-slate-800">
      <div className="font-semibold ">{props.title}</div>
      <div className="font-mono text-xs font-light">
        {convertToLocalDateTime(props.startTime)} -{" "}
        {convertToLocalDateTime(props.endTime)}
      </div>
    </div>
  );
};

export default GraphHeader;
