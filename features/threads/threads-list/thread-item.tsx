import React from "react";
import Link from "next/link";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { ParentThread } from "@/features/threads/types";
import { getRelativeTime } from "@/lib/utils/get-relative-time";

export function ThreadItem(props: ParentThread) {
  const { id, subject, body, recentContributors, replies, views, createdAt } =
    props;

  const activityDate = React.useMemo(
    () => getRelativeTime(createdAt),
    [createdAt],
  );

  return (
    <TableRow>
      <TableCell className="max-w-sm transition-transform hover:translate-x-1 md:max-w-md lg:max-w-lg">
        <Link href={`/threads/${id}`}>
          <h2 className="truncate text-lg font-medium">{subject}</h2>
          <p className="truncate text-muted-foreground">{body}</p>
        </Link>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        <AvatarGroup>
          {recentContributors.map(({ id, avatarUrl, username }) => (
            <Avatar
              key={id}
              src={avatarUrl}
              alt={`${username}'s avatar`}
              size="sm"
            />
          ))}
        </AvatarGroup>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{replies}</TableCell>
      <TableCell className="hidden md:table-cell">{views}</TableCell>
      <TableCell className="hidden lg:table-cell">{activityDate} ago</TableCell>
    </TableRow>
  );
}
