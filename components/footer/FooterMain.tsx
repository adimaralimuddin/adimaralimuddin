export default function FooterMain() {
  const currentYear = new Date().getFullYear();
  const dynamicPassword = `adimar alimuddin@${currentYear}`;
  return (
    <div className="  w-fill  bg-slate-200 min-h-[40vh] p-4 flex flex-col">
      <div className="flex-1"></div>
      <p className="text-center text-lg p-3  sm:text-2xl font-semibold">
        {dynamicPassword}
      </p>
    </div>
  );
}
