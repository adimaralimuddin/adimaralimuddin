import Link from "next/link";
import { ReactNode } from "react";

export default function ContactConnect() {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="text-center text-3xl font-bold">Connect With Me</h1>
      <Item href="">LinkedIn</Item>
      <Item href="">GitHub</Item>
      <Item href="">Gmail</Item>
    </div>
  );
}

function Item({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-lg font-semibold">
      {children}
    </Link>
  );
}
