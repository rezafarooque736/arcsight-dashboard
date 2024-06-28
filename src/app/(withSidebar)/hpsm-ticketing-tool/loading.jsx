import LoadingComponent from "@/components/loading-component";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-[calc(100vw-100px)] h-screen">
      <LoadingComponent title="HPSM Ticketing Tool" />
    </div>
  );
}
