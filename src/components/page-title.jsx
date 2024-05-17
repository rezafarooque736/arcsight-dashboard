import { cn } from "@/lib/utils";

export default function PageTitle({ title, className }) {
  return (
    <div className={cn("font-semibold text-xl font-sans", className)}>
      {title}
    </div>
  );
}
