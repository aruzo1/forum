import { useRelativeTime } from "@/lib/hooks/use-relative-time";
import { Avatar } from "@/components/ui/avatar";
import { Thread } from "../types";

export function ThreadMain({ author, createdAt, body }: Thread) {
  const threadTime = useRelativeTime(createdAt);

  return (
    <main className="flex gap-x-4 py-4">
      <Avatar src={author.avatarUrl} alt={`${author.username}'s avatar`} />
      <div>
        <span className="font-medium">{author.username}</span>
        <span className="text-muted-foreground"> - {threadTime} ago</span>
        <p className="mt-2">{body}</p>
      </div>
    </main>
  );
}
