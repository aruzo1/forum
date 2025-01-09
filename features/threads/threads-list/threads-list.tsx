import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ParentThread } from "@/features/threads/types";
import { ThreadItem } from "./thread-item";

type ThreadsListProps = {
  threads: ParentThread[];
};

export function ThreadsList({ threads }: ThreadsListProps) {
  return (
    <Table className="my-4">
      <TableHeader>
        <TableRow>
          <TableHead>Topic</TableHead>
          <TableHead className="hidden sm:table-cell">Contributors</TableHead>
          <TableHead className="hidden sm:table-cell">Replies</TableHead>
          <TableHead className="hidden md:table-cell">Views</TableHead>
          <TableHead className="hidden lg:table-cell">Activity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </TableBody>
    </Table>
  );
}
