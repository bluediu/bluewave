/* eslint-disable @typescript-eslint/ban-ts-comment */
import { isAxiosError } from "axios";

export const Errors = ({ error }: { error: Error }): JSX.Element => {
  let errorMessages: JSX.Element[] = [];

  if (isAxiosError(error)) {
    const errors = error.response!.data.errors;

    if (typeof errors === "object" && !Array.isArray(errors)) {
      // Case 1: Format errors for specific fields.
      // @ts-ignore
      errorMessages = Object.keys(errors).map((fieldName: string) => {
        if (Array.isArray(errors[fieldName])) {
          const fieldErrors = errors[fieldName].map((error: string) => (
            <li key={error}>{error}</li>
          ));
          return (
            <div key={fieldName}>
              <strong>{fieldName}</strong>
              <ul>{fieldErrors}</ul>
            </div>
          );
        } else if (typeof errors[fieldName] === "string") {
          // Case 2: Generic error with message.
          return (
            <div key={fieldName}>
              <p>{errors[fieldName]}</p>
            </div>
          );
        }
        return null;
      });
    } else if (typeof errors === "string") {
      errorMessages.push(
        <div key="error-detail">
          <p>{errors}</p>
        </div>,
      );
    }
  }

  return (
    <div>
      {errorMessages.length > 0 ? errorMessages : <p>No errors found.</p>}
    </div>
  );
};
