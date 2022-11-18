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

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  email: string;
  first_name: string | null;
  id: number;
  last_changed: string;
  last_name: string | null;
  list_id: number;
};

export type Views = {
  total: any;
};

export type NewsletterForm = {
  showIssues?: boolean;
};
