import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { FormEvent, FormEventHandler, useRef, useState } from "react";
import Button from "../elements/Button";
import ContactConnect from "./ContactConnect";

export default function ContactMain() {
  return (
    <div
      id="contact"
      className=" w-fill  min-h-screen bg-slate-200 flex flex-col items-center justify-center p-4 py-12"
    >
      <h1 className="text-4xl font-bold py-3 text-center">
        {/* {"Let's"} Make Awesome Things! */}
        {"Let's"} Chat
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch  w-full max-w-5xl py-5  gap-12 flex-wrap ring-1d">
        <Form />
        <ContactConnect />
      </div>
    </div>
  );
}
function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const username = form?.current?.username?.value || "";
    const message = form?.current?.message?.value;
    const hisemail = form?.current?.email?.value;
    const service = "service_s0fi9qc";
    const toMeTemplate = "template_1u5vyzc";
    const toThemTemplate = "template_84928uz";
    const publicId = "3Fr2JLHWu2lhE-5F1";
    const email = "adimaraisha@gmail.com";

    emailjs
      .sendForm(service, toThemTemplate, form.current || "", publicId)
      .then(
        (result) => {
          emailjs.send(
            service,
            toMeTemplate,
            { username, message, email, hisemail },
            publicId
          );
          setSent(true);
          console.log(result.text);
        },
        (error) => {
          setErrMessage(error.text);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="w-full flex-1 p-3 bg-slate-100d max-w-[550px]"
    >
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 p-5 rounded-lg shadow-md mb-4"
        >
          <h1 className="text-3xl font-semibold text-purple-600">
            Thanks For Reaching Out!
          </h1>
          <p className="text-xl px-6">
            {"I'll"} Be In Touch as Soon As Possible!
          </p>
        </motion.div>
      )}

      {errMessage && (
        <div>
          <h2 className="text-pink-500 text-xl font-semibold py-3">
            <span className="text-3xl font-extrabold">!</span> Please Contact Me
            View Email Instead. <br /> the service might be down this time.
          </h2>
        </div>
      )}
      {/* <h1 className="text-3xl font-semibold pb-4">Send Me a Message</h1> */}
      <Field text="email" type="email" placeHolder="" />
      <Field text="name" name="username" type="text" placeHolder="" />
      <Field text="message" type="text" placeHolder="" />
      <Button type="submit" className="w-full my-4">
        Send
      </Button>
    </motion.form>
  );
}

function Field({
  text,
  type,
  placeHolder,
  name,
}: {
  text: string;
  type: string;
  placeHolder: string;
  name?: string;
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
        name={name || text}
        className="border-b-2 bg-transparent border-slate-300 outline-none text-lg"
        type={type}
        required
        placeholder={placeHolder}
      />
    </span>
  );
}
