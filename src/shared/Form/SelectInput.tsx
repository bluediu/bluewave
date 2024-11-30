/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { Dropdown } from "semantic-ui-react";

/* Hooks */
import { useField } from "formik";

/* Interfaces */
import { TChoice } from "@/Admin/interfaces";

interface IProps {
  choices: TChoice[];
  disabled: boolean;
  helptext?: string;
  label: string;
  name: string;
  type: string;
  [x: string]: any;
}

export const SelectInput = (props: IProps) => {
  const { label, helptext, choices } = props;

  const [field, meta, helpers] = useField(props);

  const handleChange = (_: any, data: any) => {
    helpers.setValue(data.value);
    helpers.setTouched(true);
  };

  return (
    <div className="required field">
      <label>{label}</label>
      <Dropdown
        placeholder={`Select a ${label.toLowerCase()}...`}
        fluid
        selection
        options={choices}
        error={!!meta.error}
        search
        {...field}
        {...props}
        id={field.name}
        name={field.name}
        value={field.value.toString()}
        onChange={handleChange}
      />
      {helptext && (
        <div style={{ marginBottom: "1rem" }}>
          <small className="help-text-color">{helptext}</small>
        </div>
      )}
    </div>
  );
};
