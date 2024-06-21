import { Separator } from "@/components/ui/separator";
import CardTitleCustom from "../card-title-custom";
import { BarList } from "@tremor/react";
import LoadingComponent from "../loading-component";

export default function AssigneeDetails({ assigneeDetails }) {
  if (!assigneeDetails) return <LoadingComponent />;

  const assigneeData = Object.entries(assigneeDetails).map(([name, value]) => ({
    name,
    value: value.length,
  }));

  return (
    <div className="max-w-lg max-h-full p-2 mx-auto overflow-hidden">
      <CardTitleCustom title="Assignee Open Tickets" />
      <Separator className="mt-1 mb-2 bg-slate-300" />
      <BarList data={assigneeData} className="max-w-sm mx-auto" />
    </div>
  );
}
