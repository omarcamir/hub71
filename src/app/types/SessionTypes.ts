export interface Session {
  start: string;
  end: string;
  title: string;
}

export interface SessionsResponse {
  sessions: {
    upcoming: Session[];
    previous: Session[];
  };
}
