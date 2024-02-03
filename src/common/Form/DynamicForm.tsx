/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { Formik } from "formik";
import { Form, Loader } from "semantic-ui-react";

import { IField } from "../../Admin/interfaces";
import { TextInput } from ".";

type TObjectDynamic = {
  [key: string]: any;
};

interface IProps {
  isLoadingValues: boolean;
  fields?: IField[];
  onSubmitFunc: (data: any) => void;
  children: JSX.Element | JSX.Element[];
}

export const DynamicForm = ({
  isLoadingValues,
  fields,
  onSubmitFunc,
  children,
}: IProps) => {
  if (isLoadingValues) return <Loader active inline="centered" />;

  const initialValues: TObjectDynamic = {};
  const requiredFields: TObjectDynamic = {};

  // Initialize fields & set validation schema.
  for (const field of fields!) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    let schema = Yup.string();
    for (const rule of field.validations) {
      if (rule.required) schema = schema.required();
      if (rule.max_length) schema = schema.max(Number(rule.max_length));
      if (rule.min_length) schema = schema.max(Number(rule.min_length));
    }
    // Applying validation only for required fields.
    requiredFields[field.name] = schema;
  }

  const validationSchema = Yup.object(requiredFields);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitFunc}
    >
      {(formik) => (
        <Form
          className="login-form-admin"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          {fields?.map(({ type, name, label, disabled, help_text }) => (
            <TextInput
              key={name}
              type={type}
              name={name}
              label={label}
              disabled={disabled}
              helpText={help_text}
              required={requiredFields.hasOwnProperty(name)}
            />
          ))}

          {children}
        </Form>
      )}
    </Formik>
  );
};
