type props = { className?: string };
export default function Block({ className }: props) {
  return (
    <div
      className={"absolute bg-slate-100 w-full h-full z-[-2] " + className}
    ></div>
  );
}
