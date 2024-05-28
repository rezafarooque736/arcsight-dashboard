import { cn } from "@/lib/utils";

export default function PageTitle({ title, className }) {
  return (
    <div className={cn("font-medium text-lg font-sans text-slate-950", className)}>
      {title}
    </div>
  );
}
