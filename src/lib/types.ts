export type Issue = {
  id: string;
  title: string;
  html: string;
  sent_at: string;
  description: string;
  url: string;
  active: boolean;
};
export type Issues = {
  issues: Issue[];
};
