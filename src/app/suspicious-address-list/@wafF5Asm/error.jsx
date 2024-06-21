"use client";

export default function Error({ error }) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-3 bg-red-300">
      <h2 className="text-xl text-red-800">WAF F5 ASM Error!</h2>
      <p>please, contact GGNDC SOC developer Farooque Reza</p>
    </section>
  );
}
