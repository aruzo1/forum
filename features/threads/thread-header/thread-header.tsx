import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { ParentThread } from "../types";

export function ThreadHeader({ subject }: ParentThread) {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-3xl font-semibold">{subject}</h1>
      <Link href="/">
        <ArrowUturnLeftIcon className="size-6 transition-colors hover:text-muted-foreground" />
      </Link>
    </header>
  );
}
