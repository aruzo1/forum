export type Thread = {
  id: number;
  title: string;
  body: string;
  recentContributors: {
    id: number;
    username: string;
    avatarUrl: string;
  }[];
  replies: number;
  views: number;
  createdAt: string;
};
