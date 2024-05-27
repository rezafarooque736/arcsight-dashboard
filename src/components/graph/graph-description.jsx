import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GraphDescription = ({ graphDesc }) => {
  return (
    <Table className="my-2 w-[300px] text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="h-auto p-0 text-xs text-black">
            Policy Name
          </TableHead>
          <TableHead className="h-auto p-0 text-xs text-right text-black">
            Total Events ({graphDesc?.length})
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs text-slate-900">
        {graphDesc.map((row, index) => (
          <TableRow key={index} className="border-none">
            <TableCell className="p-0">{row.policy}</TableCell>
            <TableCell className="p-0 text-right">{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GraphDescription;
