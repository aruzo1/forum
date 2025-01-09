import React from "react";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { ParentThread } from "../types";

export function ThreadStats(props: ParentThread) {
  const { views, replies, recentContributors } = props;

  const stats = React.useMemo(
    () => [
      { label: "Replies", value: replies },
      { label: "Views", value: views },
    ],
    [views, replies],
  );

  return (
    <section className="flex justify-between py-4">
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

      <ul className="flex gap-x-8">
        {stats.map((stat) => (
          <li key={stat.label} className="flex flex-col items-center">
            <span className="text-lg font-medium leading-none">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
