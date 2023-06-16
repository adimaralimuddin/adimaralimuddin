import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">adi.mar</h1>
      </Link>
    </div>
  );
}
