export type Field = {
  fieldTitle?: string;
  type: string;
  required?: boolean;
  text?: string;
};

export interface Section {
  title: string;

  fields: Field[];
}