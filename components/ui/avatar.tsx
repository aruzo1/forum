import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeVariants = {
  sm: 35,
  md: 50,
  lg: 60,
};

type AvatarProps = React.ComponentProps<typeof Image> & {
  size?: number | keyof typeof sizeVariants;
};

export function Avatar({ size = sizeVariants["md"], ...props }: AvatarProps) {
  const convertedSize = React.useMemo(
    () => (typeof size === "number" ? size : sizeVariants[size]),
    [size],
  );

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      width={convertedSize}
      height={convertedSize}
      style={{ width: convertedSize, height: convertedSize }}
      className="rounded-full border-2 border-background"
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
