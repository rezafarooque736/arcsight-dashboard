import { columns } from "@/components/hpsm/table/columns";
import { DataTable } from "@/components/hpsm/table/data-table";

export default function DataTableContainer({ hpsmData }) {
  return (
    <div className="w-[calc(100vw-100px)] h-full p-3 mt-4 border-2 rounded-lg shadow-md border-slate-200">
      <DataTable
        columns={columns}
        data={hpsmData?.allOpenTickets}
        tableHeaderText="HPSM Ticket Details list"
        assigneeList={hpsmData.assigneeList}
        subServiceList={hpsmData.subServiceList}
        regionList={hpsmData.regionList}
        serviceList={hpsmData.serviceList}
        serviceTypeList={hpsmData.serviceTypeList}
      />
    </div>
  );
}
