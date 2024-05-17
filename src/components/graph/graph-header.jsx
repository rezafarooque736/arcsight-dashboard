import React from "react";

const GraphHeader = (props) => {
  return (
    <div className="flex flex-row justify-between items-center text-sm text-slate-800 font-normal">
      <div>{props.title}</div>
      <div className="font-light text-xs">
        {new Date(props.startTime).toLocaleString()} -{" "}
        {new Date(props.endTime).toLocaleString()}
      </div>
    </div>
  );
};

export default GraphHeader;
