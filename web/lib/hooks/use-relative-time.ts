import React from "react";
import { getRelativeTime } from "../utils/get-relative-time";

export function useRelativeTime(date: string) {
  const relativeTime = React.useMemo(() => getRelativeTime(date), [date]);

  return relativeTime;
}
