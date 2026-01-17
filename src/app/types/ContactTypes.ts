export interface ContactSuccessResponse {
  success: true;
  message: string;
}

export interface ContactValidationErrorResponse {
  success: false;
  message: string;
  errors: Record<string, string[]>;
}

export type ContactResponse =
  | ContactSuccessResponse
  | ContactValidationErrorResponse;
