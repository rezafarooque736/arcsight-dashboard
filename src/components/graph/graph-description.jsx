import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GraphDescription = ({ columnHeaders, rows }) => {
  return (
    <Table className="my-2 w-[300px] text-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="p-0 h-auto text-black text-xs">
            {columnHeaders[0]}
          </TableHead>
          <TableHead className="text-right p-0 h-auto text-black text-xs">
            {columnHeaders[1]} ({rows.length})
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-slate-900 text-xs">
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="p-0">{row.value[0]}</TableCell>
            <TableCell className="text-right p-0">{row.value[1]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GraphDescription;
