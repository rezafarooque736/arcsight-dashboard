import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GraphDescriptionAllPolicy = ({ graphDesc }) => {
  // console.log(graphDesc);
  return (
    <Table className="w-full my-2 text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="h-auto p-0 text-xs text-black">
            Policy Name
          </TableHead>
          <TableHead className="h-auto p-0 text-xs text-black">
            Passed
          </TableHead>
          <TableHead className="h-auto p-0 text-xs text-black">
            Alerted
          </TableHead>
          <TableHead className="h-auto p-0 text-xs text-black">
            Blocked
          </TableHead>
          <TableHead className="h-auto p-0 text-xs text-right text-black">
            Total Events ({graphDesc?.length})
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-xs text-black">
        {graphDesc.map((row, index) => (
          <TableRow key={index} className="border-none">
            <TableCell className="p-0">{row.policy}</TableCell>
            <TableCell className="p-0">{row.passed}</TableCell>
            <TableCell className="p-0">{row.alerted}</TableCell>
            <TableCell className="p-0">{row.blocked}</TableCell>
            <TableCell className="p-0 text-right">{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GraphDescriptionAllPolicy;
