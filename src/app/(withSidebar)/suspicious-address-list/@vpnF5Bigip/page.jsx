import CardTitleCustom from "@/components/card-title-custom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getQueryViewerData } from "@/data/api";

export default async function VPNF5BigIPPage() {
  const data = await getQueryViewerData("vpn-f5-bigIP");

  return (
    <div className="w-full h-full overflow-auto">
      <div className="flex items-center justify-between px-3 py-1 border-b-2 border-slate-300">
        <CardTitleCustom
          title="VPN F5 Big IP"
          // title={data.name}
          className={"text-sm text-center"}
        />
        <span className="font-mono text-xs text-gray-800">
          {data.startTimestamp} - {data.endTimestamp}
        </span>
      </div>

      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="h-auto py-1 text-xs font-semibold text-slate-800">
              IP
            </TableHead>

            <TableHead className="h-auto py-1 text-xs font-semibold text-center text-slate-800">
              Session ID
            </TableHead>

            <TableHead className="h-auto py-1 text-xs font-semibold text-center text-slate-800">
              Count
            </TableHead>

            <TableHead className="h-auto py-1 text-xs font-semibold text-right text-slate-800">
              Product
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs">
          {data?.ipStatusCountList.map((row) => (
            <TableRow key={row.ip}>
              <TableCell className="py-1">{row.ip}</TableCell>
              <TableCell className="py-1 text-center">{row.string4}</TableCell>
              <TableCell className="py-1 text-center">{row.count}</TableCell>
              <TableCell className="py-1 text-right">xxxxxxxx</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
