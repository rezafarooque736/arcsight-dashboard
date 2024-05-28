export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-200 rounded-full animate-spin border-t-sky-600" />
      <div className="mt-3 text-center">Loading...</div>
    </div>
  );
}
