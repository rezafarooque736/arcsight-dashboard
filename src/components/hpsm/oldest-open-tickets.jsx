import { Separator } from "@/components/ui/separator";
import CardItemList from "./card-item-list";
import CardTitleCustom from "@/components/card-title-custom";
import Loading from "@/app/loading";

export default function OldestOpenTickets({ oldestOpenTicketSize10 }) {
  if (!oldestOpenTicketSize10) return <Loading />;

  return (
    <div className="w-full max-h-full p-2 mx-auto overflow-hidden">
      <CardTitleCustom title="Oldest Open Tickets" />
      <Separator className="mt-1 mb-2 bg-slate-300" />
      <p className="flex items-center justify-between mt-2 text-sm text-slate-600 dark:text-slate-100">
        <span>IncidentID-Assignee</span>
        <span>Open Time</span>
      </p>
      <CardItemList oldestOpenTicketSize10={oldestOpenTicketSize10} />
    </div>
  );
}
