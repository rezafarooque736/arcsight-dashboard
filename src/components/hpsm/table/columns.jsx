"use client";

import {
  assigneeList,
  priorityList,
  regionList,
  serviceList,
  serviceTypeList,
  subServiceList,
} from "@/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";

export const columns = [
  {
    accessorKey: "IncidentID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Incident Id" />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-center text-slate-900">
        {row.getValue("IncidentID")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "Title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div className="text-wrap w-44 text-slate-800 text-[13px]">
        {row.getValue("Title")}
      </div>
    ),
  },

  {
    accessorKey: "OpenedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Opened By" />
    ),
    cell: ({ row }) => (
      <div className="w-20 text-wrap text-slate-800 text-[13px]">
        {row.getValue("OpenedBy")}
      </div>
    ),
  },

  {
    accessorKey: "Assignee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assignee" />
    ),
    cell: ({ row }) => {
      const assignee = assigneeList.find(
        (assignee) => assignee.value === row.getValue("Assignee")
      );

      if (!assignee) {
        return null;
      }

      return (
        <div className="w-20 text-wrap text-slate-800 text-[13px]">
          <span>{assignee.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "OpenTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Open Time" />
    ),
    cell: ({ row }) => {
      const dateValue = row.getValue("OpenTime");

      if (!dateValue) {
        return null;
      }

      const formattedDate = new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(dateValue));

      return (
        <div className="w-24 text-center text-slate-800 text-[13px] text-wrap">
          {formattedDate.replaceAll("-", " ")}
        </div>
      );
    },
  },

  {
    accessorKey: "Service",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service" />
    ),
    cell: ({ row }) => {
      const service = serviceList.find(
        (service) => service.value === row.getValue("Service")
      );

      if (!service) {
        return null;
      }

      return (
        <div className="w-[90px] text-wrap text-slate-800 text-[13px]">
          <span>{service.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "SubService",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sub Service" />
    ),
    cell: ({ row }) => {
      const subService = subServiceList.find(
        (service) => service.value === row.getValue("SubService")
      );

      if (!subService) {
        return null;
      }

      return (
        <div className="w-32 text-center text-wrap text-slate-800 text-[13px]">
          <span>{subService.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "Priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorityList.find(
        (priority) => priority.value === row.getValue("Priority")
      );

      if (!priority) {
        return null;
      }

      return <Badge className={priority.colorValue}>{priority.label}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "Region",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Region" />
    ),
    cell: ({ row }) => {
      const region = regionList.find(
        (region) => region.value === row.getValue("Region")
      );

      if (!region) {
        return null;
      }

      return (
        <div className="text-center text-slate-800 text-[13px]">
          <span>{region.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "ServiceType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Type" />
    ),
    cell: ({ row }) => {
      const serviceType = serviceTypeList.find(
        (service) => service.value === row.getValue("ServiceType")
      );

      if (!serviceType) {
        return null;
      }

      return (
        <div className="w-24 text-center text-slate-800 text-[13px]">
          <span>{serviceType.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
