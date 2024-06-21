import PageTitle from "@/components/page-title";

export default function Default() {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-15px)] gap-2">
      {/* page title */}
      <div className="flex items-center justify-between px-1 -mb-1">
        <PageTitle title="Suspicious Address List (On All Devices)" />
        <p className="font-serif text-base">
          Data last refreshed :{" "}
          <span className="text-sm text-gray-700">
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}
