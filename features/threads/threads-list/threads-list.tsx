import { Thread } from "@/features/threads/types";
import { ThreadItem } from "./thread-item";

type ThreadsListProps = {
  threads: Thread[];
};

const stats = ["Replies", "Views", "Activity"];

export function ThreadsList({ threads }: ThreadsListProps) {
  return (
    <main className="my-4">
      <header className="grid grid-cols-12 items-center gap-x-8 border-b p-4">
        <h1 className="col-span-9 text-3xl font-bold">Threads</h1>
        {stats.map((label, i) => (
          <span
            key={i}
            className="col-span-1 flex justify-center text-lg font-medium"
          >
            {label}
          </span>
        ))}
      </header>
      <section className="divide-y">
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </section>
    </main>
  );
}
