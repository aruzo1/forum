import React from "react";
import Link from "next/link";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Thread } from "@/features/threads/types";

export function ThreadItem(props: Thread) {
  const { id, title, body, recentContributors, replies, views, activity } =
    props;

  const activityDate = React.useMemo(
    () => new Date(activity).toLocaleDateString(),
    [activity],
  );

  const stats = [replies, views, activityDate];

  return (
    <Link
      href={`/threads/${id}`}
      className="grid grid-cols-12 items-center gap-x-8 bg-card p-4 text-card-foreground transition-colors hover:bg-muted"
    >
      <div className="col-span-7">
        <h2 className="truncate text-xl font-semibold leading-none tracking-tight">
          {title}
        </h2>
        <p className="mt-1 truncate text-sm text-muted-foreground">{body}</p>
      </div>

      <AvatarGroup className="col-span-2 flex justify-center">
        {recentContributors.map(({ id, avatarUrl, username }) => (
          <Avatar key={id} src={avatarUrl} alt={`${username}'s avatar`} />
        ))}
      </AvatarGroup>

      {stats.map((stat, i) => (
        <span key={i} className="col-span-1 flex justify-center font-medium">
          {stat}
        </span>
      ))}
    </Link>
  );
}
