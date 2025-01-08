import { ThreadsList } from "@/features/threads/threads-list";
import { DUMMY_THREADS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="container">
      <ThreadsList threads={DUMMY_THREADS} />
    </div>
  );
}
