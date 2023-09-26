export interface CreateEmailParams {
  subject: string;
  text: string;
  to: string;
  from: string;
}

export interface CreateEmailResponse {
  status: 'success';
}

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

export interface EmailDetails {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}
