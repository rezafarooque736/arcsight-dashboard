"use client";

import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { priorityList } from "@/data";

export function DataTableToolbar({
  table,
  globalFilter,
  setGlobalFilter,
  assigneeList,
  subServiceList,
  regionList,
  serviceList,
  serviceTypeList,
}) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center flex-1 space-x-2">
      <Input
        placeholder="Filter table..."
        value={globalFilter ?? ""}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn("Assignee") && (
        <DataTableFacetedFilter
          column={table.getColumn("Assignee")}
          title="Assignee"
          options={assigneeList}
        />
      )}
      {table.getColumn("Region") && (
        <DataTableFacetedFilter
          column={table.getColumn("Region")}
          title="Region"
          options={regionList}
        />
      )}
      {table.getColumn("Service") && (
        <DataTableFacetedFilter
          column={table.getColumn("Service")}
          title="Service"
          options={serviceList}
        />
      )}
      {table.getColumn("SubService") && (
        <DataTableFacetedFilter
          column={table.getColumn("SubService")}
          title="Sub Service"
          options={subServiceList}
        />
      )}
      {table.getColumn("ServiceType") && (
        <DataTableFacetedFilter
          column={table.getColumn("ServiceType")}
          title="ServiceType"
          options={serviceTypeList}
        />
      )}
      {table.getColumn("Priority") && (
        <DataTableFacetedFilter
          column={table.getColumn("Priority")}
          title="Priority"
          options={priorityList}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <XIcon className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );
}
