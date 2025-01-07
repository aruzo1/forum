import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar(props: React.ComponentProps<typeof Image>) {
  return (
    <Image
      width={30}
      height={30}
      className="rounded-full border border-2 border-card"
      {...props}
    />
  );
}

export function AvatarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex -space-x-2", className)} {...props} />;
}
