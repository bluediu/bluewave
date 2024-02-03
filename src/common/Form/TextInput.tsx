/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from "formik";
import { FormField, Input } from "semantic-ui-react";

interface IProps {
  type: string;
  name: string;
  label: string;
  disabled: boolean;
  helpText?: string;
  required: boolean;
  [x: string]: any;
}

export const TextInput = ({ label, helpText, required, ...props }: IProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormField
        control={Input}
        label={label}
        error={
          meta.touched &&
          meta.error && { content: meta.error, pointing: "below" }
        }
        {...field}
        {...props}
        id={props.name}
        autoComplete="off"
        required={required}
      />
      {helpText && (
        <div style={{ marginBottom: "1rem" }}>
          <small className="help_text_color">{helpText}</small>
        </div>
      )}
    </>
  );
};
