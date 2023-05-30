import Image from "next/image";

export type StackListsProps = { title: string; stacks: string[] };

export default function StackLists(props: StackListsProps) {
  return (
    <div className="p-2">
      <h1 className="text-xl font-semibold pb-3">{props?.title}</h1>
      <div className="flex flex-wrap gap-2 ">
        {props?.stacks?.map((stack) => (
          <div
            className="flex gap-1 bg-slate-50 rounded-md p-[1px] px-[4px] ring-1 ring-slate-100"
            key={stack}
          >
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-md max-w-[24px] max-h-[24px]"
                src={`/images/stacks/${stack?.toLowerCase()}.png`}
                alt=""
                width={18}
                height={18}
              />
            </div>
            <p className="text-[.9rem]">{stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
