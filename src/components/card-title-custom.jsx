import { cn } from "@/lib/utils";

export default function CardTitleCustom({ title, className }) {
  return (
    <h3
      className={cn(
        "text-lg font-medium leading-tight text-slate-800 dark:text-slate-50",
        className
      )}
    >
      {title}
    </h3>
  );
}
