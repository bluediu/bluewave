/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs */
import * as Yup from "yup";

/* Libs components */
import { Formik } from "formik";
import { Form, Segment } from "semantic-ui-react";

/* Components */
import { TextInput, SelectInput } from ".";

/* Interfaces */
import { IField } from "../../Admin/interfaces";

import "./forms.scss";

type TObjectDynamic = {
  [key: string]: any;
};

interface IProps {
  fields?: IField[];
  isLoadingValues: boolean;
  match?: string[];
  onSubmitFunc: (data: any) => void;
  children: JSX.Element | JSX.Element[];
}

export const DynamicForm = (props: IProps) => {
  const { isLoadingValues, fields, match, children, onSubmitFunc } = props;

  if (isLoadingValues) return <Segment loading size="small" />;

  const initialValues: TObjectDynamic = {};
  const toValidateFields: TObjectDynamic = {};
  const markAsRequiredUI: string[] = [];

  // Initialize fields & set validation schema.
  for (const field of fields!) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    let schema = Yup.string();
    for (const rule of field.validations) {
      if (rule.required) {
        schema = schema.required();
        markAsRequiredUI.push(field.name);
      }
      if (rule.max_length) schema = schema.max(rule.max_length);
      if (rule.min_length) schema = schema.min(rule.min_length);
      if (field.type === "email") schema = schema.email();
    }

    toValidateFields[field.name] = schema;
  }

  const validateMatch = (values: TObjectDynamic): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (match && values[match[0]] !== values[match[1]]) {
      errors[match[1]] = `${match[0]} and ${match[1]} must match`;
    }

    return errors;
  };

  const validationSchema = Yup.object(toValidateFields);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validate={validateMatch}
      onSubmit={onSubmitFunc}
    >
      {(formik) => (
        <Form
          className="login-form-admin"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          {fields?.map(
            ({ type, name, label, disabled, help_text, choices }) => {
              if (type === "select") {
                return (
                  <SelectInput
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    choices={choices}
                    disabled={disabled}
                    helptext={help_text}
                    required={markAsRequiredUI.includes(name)}
                  />
                );
              } else {
                return (
                  <TextInput
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    disabled={disabled}
                    helpText={help_text}
                    required={markAsRequiredUI.includes(name)}
                  />
                );
              }
            },
          )}

          {children}
        </Form>
      )}
    </Formik>
  );
};
