import Button from "../elements/Button";
import ContactConnect from "./ContactConnect";

export default function ContactMain() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold py-3 text-center">
        {"Let's"} Make Awesome Things!
      </h1>
      <div className=" w-full max-w-5xl py-5 flex gap-3 flex-wrap ring-1d">
        <Form />
        <ContactConnect />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className=" flex-1 p-3 bg-slate-100d max-w-[550px]">
      <h1 className="text-3xl font-semibold pb-4">Send Me a Message</h1>
      <Field text="email" type="email" placeHolder="valid email" />
      <Field text="name" type="text" placeHolder="name" />
      <Field text="message" type="text" placeHolder="" />
      <Button className="w-full my-4">Send</Button>
    </div>
  );
}

function Field({
  text,
  type,
  placeHolder,
}: {
  text: string;
  type: string;
  placeHolder: string;
}) {
  return (
    <span className="flex flex-col gap-2 py-3 ring-1d">
      <label
        className=" -mb-2 first-letter:capitalize font-semibold text-lg"
        htmlFor=""
      >
        {text}
      </label>
      <input
        name={text}
        className="border-b-2 bg-transparent border-slate-300 outline-none text-lg"
        type={type}
        placeholder={placeHolder}
      />
    </span>
  );
}
