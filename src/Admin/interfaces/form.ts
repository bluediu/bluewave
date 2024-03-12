export interface IForm {
  fields: IField[];
}

export type TChoice = {
  key: string;
  text: string;
  value: string;
};

type TFieldType = "text" | "password" | "email" | "select" | "checkbox";

export interface IField {
  type: TFieldType;
  name: string;
  label: string;
  help_text: string;
  disabled: boolean;
  validations: IValidation[];
  choices: TChoice[];
  value: string;
}

export interface IValidation {
  required: boolean;
  max_length: number;
  min_length: null;
}
