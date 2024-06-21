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
  const { ipStatusCountList: data } = await getQueryViewerData("vpn-f5-bigIP");

  return (
    <div className="w-full h-full overflow-auto">
      <CardTitleCustom
        title="VPN F5 Big IP"
        className={"text-base text-center border-b-2 border-slate-300"}
      />

      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="h-auto py-1 text-xs text-slate-900">
              IP
            </TableHead>

            <TableHead className="h-auto py-1 text-xs text-center text-slate-900">
              Hash
            </TableHead>

            <TableHead className="h-auto py-1 text-xs text-center text-slate-900">
              Count
            </TableHead>

            <TableHead className="h-auto py-1 text-xs text-right text-slate-900">
              Product
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs">
          {data.map((row) => (
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
