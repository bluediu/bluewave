import { isAxiosError } from "axios";

export const Errors = ({ error }: { error: Error }): JSX.Element => {
  let errorMessages: JSX.Element[] = [];

  if (isAxiosError(error)) {
    errorMessages = Object.keys(error.response?.data.errors).map(
      (fieldName: string) => {
        const fieldErrors = error.response?.data.errors[fieldName].map(
          (error: string) => <li key={error}>{error}</li>,
        );
        return (
          <div key={fieldName}>
            <strong>{fieldName}</strong>
            <ul>{fieldErrors}</ul>
          </div>
        );
      },
    );
  }

  return <div>{errorMessages}</div>;
};
