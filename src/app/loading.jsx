import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-14 h-14 animate-spin">
        <Image
          src="/railtel_logo_without_text.png"
          alt="loading"
          width={56}
          height={56}
        />
      </div>
      <div className="mt-3 text-center">Loading...</div>
    </div>
  );
}
