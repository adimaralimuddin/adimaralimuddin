interface props {
  title: string;
  className?: string;
}
export default function Heading({ title, className }: props) {
  return (
    <div
      style={{ justifyItems: "flex-end" }}
      className={
        " flex items-center justify-end bg-slate-200 p-3 w-full max-w-[50%] relative animate-enter my-12 " +
        className
      }
    >
      <h1 className="absolute bottom-3 text-3xl font-semibold">{title}</h1>
    </div>
  );
}
