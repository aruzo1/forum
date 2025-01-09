import { User } from "@/features/users/types";

export type Thread = {
  id: number;
  parentId: number | null;
  subject: string | null;
  body: string;
  recentContributors: User[] | null;
  replies: number | null;
  views: number | null;
  author: User;
  createdAt: string;
};

export type ParentThread = Thread & {
  parentId: null;
  subject: string;
  recentContributors: User[];
  replies: number;
  views: number;
};

export type SubThread = Thread & {
  parentId: number;
  subject: null;
  recentContributors: null;
  replies: null;
  views: null;
}