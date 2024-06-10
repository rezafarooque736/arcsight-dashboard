import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import getDateFromUTC from "@/utils/get-date-from-utc";

export default function CardItemList({ oldestOpenTicketSize10 }) {
  return (
    <div className="flex flex-col w-full gap-2 grow">
      {oldestOpenTicketSize10.map((ticket) => (
        <div
          key={ticket.IncidentID}
          className="flex items-center justify-between gap-2 p-1 text-sm bg-red-100 rounded text-slate-800"
        >
          <div className="w-auto truncate">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-[10px]  font-light text-slate-700 font-mono">
                    [{ticket.IncidentID}]
                  </span>
                  -{ticket.Assignee}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Incident Id - {ticket.IncidentID}</p>
                  <p>Title - {ticket.Title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-xs min-w-max">
            {getDateFromUTC(ticket.OpenTime)}
          </div>
        </div>
      ))}
    </div>
  );
}
