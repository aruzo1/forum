import { notFound } from "next/navigation";
import { DUMMY_PARENT_THREADS, DUMMY_SUB_THREADS } from "@/lib/constants";
import { ThreadMain } from "@/features/threads/thread-main";
import { ThreadHeader } from "@/features/threads/thread-header";
import { ThreadStats } from "@/features/threads/thread-stats";

type ThreadProps = {
  params: Promise<{ id: string }>;
};

async function Thread({ params }: ThreadProps) {
  const id = parseInt((await params).id);

  if (isNaN(id)) {
    notFound();
  }

  const thread = DUMMY_PARENT_THREADS.find((t) => t.id === id);

  if (!thread) {
    notFound();
  }

  const subThreads = DUMMY_SUB_THREADS.filter((t) => t.parentId === thread.id);

  return (
    <section className="container mt-4 max-w-3xl divide-y">
      <ThreadHeader {...thread} />
      <ThreadMain {...thread} />
      <ThreadStats {...thread} />
      {subThreads.map((t) => (
        <ThreadMain key={t.id} {...t} />
      ))}
    </section>
  );
}

export default Thread;
