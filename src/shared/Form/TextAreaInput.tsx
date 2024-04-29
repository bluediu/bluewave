/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { FormField, TextArea } from "semantic-ui-react";

/* Hooks */
import { useField } from "formik";

interface IProps {
  disabled: boolean;
  helpText?: string;
  label: string;
  name: string;
  required: boolean;
  type: string;
  [x: string]: any;
}

export const TextAreaInput = ({
  label,
  helpText,
  required,
  ...props
}: IProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormField
        control={TextArea}
        className={`textarea-resize ${helpText ? "mb-0" : ""}`}
        label={label}
        error={
          meta.touched &&
          meta.error && {
            content: meta.error.replace(/_/g, " "),
            pointing: "below",
          }
        }
        {...field}
        {...props}
        id={props.name}
        autoComplete="off"
        required={required}
      />
      {helpText && (
        <div style={{ marginBottom: "1rem" }}>
          <small className="help-text-color">{helpText}</small>
        </div>
      )}
    </>
  );
};
