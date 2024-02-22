export interface IAuthForm {
  fields: IField[];
}

enum FieldType {
  Text = "text",
  Password = "password",
  Email = "email",
  Select = "select",
  Checkbox = "checkbox",
  TextArea = "textarea",
}

export interface IField {
  type: FieldType;
  name: string;
  label: string;
  help_text: string;
  disabled: boolean;
  validations: IValidation[];
  choices: [];
  value: string;
}

export interface IValidation {
  required: boolean;
  max_length: number;
  min_length: null;
}
