interface props {
  lists: string[];
  header: string;
}
export default function Lister(props: props) {
  return (
    <div className="p-3 ring-2d ring-slate-100 flex-1">
      <h2 className="font-extrabold text-5xl ">{props?.header}</h2>
      <div className="bg-cyan-500 p-[4px] w-full max-w-[100px] "></div>
      <nav className="py-3">
        {props.lists?.map((list) => (
          <li key={list} className="text-lg">
            {list}
          </li>
        ))}
      </nav>
    </div>
  );
}
