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
  count: number;
};

export type Views = {
  total: any;
};
