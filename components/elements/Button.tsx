interface props {
  icon?: string;
}
export default function Button(props: props & any) {
  return (
    <button
      {...props}
      className={
        " p-1.5 px-6 bg-button-maind bg-teal-600 text-white hover:bg-button-main-hover    " +
        props?.className
      }
    >
      {props?.children}
    </button>
  );
}
