import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ChartDescription = ({ chartDesc }) => {
  return (
    <div className="w-full h-full p-1 overflow-auto border-2 border-gray-400 rounded-lg">
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
    </div>
  );
};

export default ChartDescription;
