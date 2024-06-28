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

export default async function DeviceProductDefault() {
  const { ipStatusCountList: data } = await getQueryViewerData(
    "device-product"
  );

  return (
    <div className="w-full h-full overflow-auto">
      <CardTitleCustom
        title="Device Product"
        className={"text-base text-center border-b-2 border-slate-300"}
      />
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="h-auto py-1 text-xs font-semibold text-slate-800">
              IP
            </TableHead>

            <TableHead className="h-auto py-1 text-xs font-semibold text-center text-slate-800">
              Status
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
          {data.map((row) => (
            <TableRow key={row.ip}>
              <TableCell className="py-1">{row.ip}</TableCell>
              <TableCell className="py-1 text-center">{row.status}</TableCell>
              <TableCell className="py-1 text-center">{row.count}</TableCell>
              <TableCell className="py-1 text-right">
                {row.device_product}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
