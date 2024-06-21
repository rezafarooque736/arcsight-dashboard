export default function SuspiciousAddressListLayout({
  children,
  paloAlto,
  wafF5Asm,
  vpnF5Bigip,
  deviceProduct,
}) {
  return (
    <section className="flex flex-col w-full h-[calc(100vh-50px)] gap-2">
      {children}
      <section className="grid items-stretch w-full h-full grid-cols-2 grid-rows-2 gap-4">
        <div className="flex items-center justify-center w-full h-full border-2 rounded-md shadow border-slate-300 bg-slate-50">
          {paloAlto}
        </div>
        <div className="flex items-center justify-center w-full h-full border-2 rounded-md shadow border-slate-300 bg-slate-50">
          {wafF5Asm}
        </div>
        <div className="flex items-center justify-center w-full h-full border-2 rounded-md shadow border-slate-300 bg-slate-50">
          {vpnF5Bigip}
        </div>
        <div className="flex items-center justify-center w-full h-full border-2 rounded-md shadow border-slate-300 bg-slate-50">
          {deviceProduct}
        </div>
      </section>
    </section>
  );
}
