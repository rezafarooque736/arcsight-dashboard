import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeDelta } from "@tremor/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Triangle } from "lucide-react";

export default function ArcsightTable({ chartDesc }) {
  return (
    <div className="w-full h-full overflow-auto border border-gray-400 rounded-lg">
      <div className="relative h-auto p-1 overflow-hidden rounded-lg">
        {/* chart description */}
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="h-auto py-1 text-xs text-slate-950">
                Policy Name
              </TableHead>

              <TableHead className="flex items-center h-auto gap-1 py-1 text-xs text-green-950">
                Passed (7 Days Avg)
              </TableHead>
              <TableHead className="h-auto py-1 text-xs text-green-950">
                Passed (24 Hrs)
              </TableHead>

              <TableHead className="flex items-center h-auto gap-1 py-1 text-xs text-yellow-950">
                Alerted (7 Days Avg)
              </TableHead>
              <TableHead className="h-auto py-1 text-xs text-yellow-950">
                Alerted (24 Hrs)
              </TableHead>

              <TableHead className="flex items-center h-auto gap-1 py-1 text-xs text-red-950">
                Blocked (7 Days Avg)
              </TableHead>
              <TableHead className="h-auto py-1 text-xs text-red-950">
                Blocked (24 Hrs)
              </TableHead>

              <TableHead className="h-auto py-1 text-xs text-right text-black">
                Total Events ({chartDesc?.length})
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {chartDesc.map((row) => (
              <TableRow
                key={row.policy}
                className={cn(
                  Math.abs(row?.passed_avg_pct) > 20 ||
                    Number(row?.alerted_avg_pct) > 5 ||
                    Number(row?.blocked_avg_pct) > 5
                    ? "bg-red-100"
                    : "",
                  "border-none"
                )}
              >
                <TableCell className="py-1">{row.policy}</TableCell>

                {/* passed */}
                <TableCell className="py-1 text-green-950">
                  {row.passed_avg.toLocaleString()}
                </TableCell>
                <TableCell className="flex items-center gap-1 py-1 text-green-950">
                  {row.passed.toLocaleString()}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <BadgeDelta
                          className="text-xs leading-3"
                          size={"xs"}
                          deltaType={
                            row.passed_avg_pct > 0
                              ? "increase"
                              : row.passed_avg_pct < 0
                              ? "decrease"
                              : "unchanged"
                          }
                          isIncreasePositive={true}
                        >
                          {row.passed_avg_pct}%
                        </BadgeDelta>
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center gap-1">
                        <Triangle className="size-3" /> to weekly average
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>

                {/* alerted */}
                <TableCell className="py-1 text-yellow-950">
                  {row.alerted_avg.toLocaleString()}
                </TableCell>
                <TableCell className="flex items-center gap-1 py-1 text-yellow-950">
                  {row.alerted.toLocaleString()}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <BadgeDelta
                          className="text-xs leading-3"
                          size={"xs"}
                          deltaType={
                            row.alerted_avg_pct > 0
                              ? "increase"
                              : row.alerted_avg_pct < 0
                              ? "decrease"
                              : "unchanged"
                          }
                          isIncreasePositive={true}
                        >
                          {row.alerted_avg_pct}%
                        </BadgeDelta>
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center gap-1">
                        <Triangle className="size-3" /> to weekly average
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>

                {/* blocked */}
                <TableCell className="py-1 text-red-950">
                  {row.blocked_avg.toLocaleString()}
                </TableCell>
                <TableCell className="flex items-center gap-1 py-1 text-red-950">
                  {row.blocked.toLocaleString()}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <BadgeDelta
                          className="text-xs leading-3"
                          size={"xs"}
                          deltaType={
                            row.blocked_avg_pct > 0
                              ? "increase"
                              : row.blocked_avg_pct < 0
                              ? "decrease"
                              : "unchanged"
                          }
                          isIncreasePositive={true}
                        >
                          {row.blocked_avg_pct}%
                        </BadgeDelta>
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center gap-1">
                        <Triangle className="size-3" /> to weekly average
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>

                <TableCell className="py-1 text-right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
