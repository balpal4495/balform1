import React from "react";
import { Section } from "./types";

interface Props {
  sections: Section[];
  currentIndex: number;
  onSubmit: () => void;
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
  const { sections, currentIndex = 0, onSubmit } = props;

  return (
    <>
      {sections[currentIndex].fields.map((f, index) => (
        <RenderInput key={`${index}-${f.fieldTitle}`} fieldTitle={f.fieldTitle!} type={f.type!} text={f.text} />
      ))}
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}
