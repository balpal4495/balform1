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
}

const checkData = (data: Section[]) => {
  let isValid = true;
  if (!data.length) {
    isValid = false;
    return isValid;
  }


  for (let i = 0; i < data.length; i++) {
    if (!data[i].title) {
      isValid = false;
      break;
    }
    if (!data[i].fields.length) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export function SectionView(props: Props) {
  const { sections } = props;

  const isDataInValid = !sections || !checkData(sections);

  if (isDataInValid) return <div>Error something went wrong</div>;
  return <div>name</div>;
}
