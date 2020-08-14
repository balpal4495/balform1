import React from "react";

type Field = {
  fieldTitle?: string;
  type: string;
  required?: boolean;
  text?: string;
};

interface Section {
  title: string;

  fields: Field[];
}
interface Props {
  sections: Section[];
  currentIndex: number;
}

interface TextInputProps {
  text?: string;
  type: string;
  fieldTitle: string;
}

function RenderInput(props: TextInputProps) {
  const { fieldTitle, type, text } = props;
  if(type === 'checkbox') {
    return(
      <>
      <div>{text}</div>
      </>
    )
  }
  return (
    <>
      <div>{fieldTitle}</div>
    </>
  );
}

export function SectionView(props: Props) {
  const { sections, currentIndex = 0 } = props;

  return (
    <>
      {sections[currentIndex].fields.map((f, index) => (
        <RenderInput key={`${index}-${f.fieldTitle}`} fieldTitle={f.fieldTitle!} type={f.type!} text={f.text} />
      ))}
    </>
  );
}
