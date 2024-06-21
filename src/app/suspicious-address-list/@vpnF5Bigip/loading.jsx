import LoadingComponent from "@/components/loading-component";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoadingComponent title="VPN F5 BigIP" />
    </div>
  );
}
