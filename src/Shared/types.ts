export type Field = {
  fieldTitle?: string;
  type: string;
  required?: boolean;
  text?: string;
  validationType?: string;
  minLength?: number;
  maxLength?: number;
};

export interface Section {
  title: string;

  fields: Field[];
}