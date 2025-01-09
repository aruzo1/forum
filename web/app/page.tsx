import { ThreadsList } from "@/features/threads/threads-list";
import { DUMMY_PARENT_THREADS } from "@/lib/constants";

export default function Home() {
  const threads = DUMMY_PARENT_THREADS.filter((t) => t.parentId === null);

  return (
    <div className="container">
      <ThreadsList threads={threads} />
    </div>
  );
}
