import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BorderBeam } from "@/components/magicui/border-beam";

const ChartDescription = ({ chartDesc }) => {
  return (
    <div className="w-full h-full overflow-auto border border-gray-400 rounded-lg">
      <div className="relative h-auto p-1 overflow-hidden rounded-lg">
        {/* chart description */}
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="h-auto p-1 text-xs text-black">
                Policy Name
              </TableHead>
              <TableHead className="h-auto p-1 text-xs text-black">
                Passed
              </TableHead>
              <TableHead className="h-auto p-1 text-xs text-black">
                Alerted
              </TableHead>
              <TableHead className="h-auto p-1 text-xs text-black">
                Blocked
              </TableHead>
              <TableHead className="h-auto p-1 text-xs text-right text-black">
                Total Events ({chartDesc?.length})
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs text-black">
            {chartDesc.map((row, index) => (
              <TableRow key={index} className="border-none">
                <TableCell className="p-1">{row.policy}</TableCell>
                <TableCell className="p-1">
                  {row.passed.toLocaleString()}
                </TableCell>
                <TableCell className="p-1">
                  {row.alerted.toLocaleString()}
                </TableCell>
                <TableCell className="p-1">
                  {row.blocked.toLocaleString()}
                </TableCell>
                <TableCell className="p-1 text-right">
                  {row.total.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </div>
  );
};

export default ChartDescription;
