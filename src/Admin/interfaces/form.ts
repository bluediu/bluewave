export interface IForm {
  fields: IField[];
}

export type TChoice = {
  key: string;
  text: string;
  value: string;
};

type TFieldType =
  | "text"
  | "date"
  | "number"
  | "textarea"
  | "password"
  | "email"
  | "select"
  | "checkbox"
  | "file";

interface IDate {
  min: string;
  max: string;
}

export interface IField {
  type: TFieldType;
  name: string;
  label: string;
  help_text: string;
  disabled: boolean;
  validations: IValidation[];
  choices: TChoice[];
  value: string;
  date: IDate;
}

interface IValidation {
  required: boolean;
  max_length: number;
  min_length: null;
}
