import React, { useState, useCallback } from "react";
import { SectionView } from "./SectionView";
import "./App.css";
import { Section } from "./types";

const initialFormData: Section[] = [
  {
    title: "User",
    fields: [
      { fieldTitle: "name", type: "text", required: true },
      { fieldTitle: "role", type: "text", required: false },
      { fieldTitle: "email", type: "text", required: true },
      { fieldTitle: "password", type: "password", required: true },
    ],
  },
  {
    title: "Privacy",
    fields: [
      {
        fieldTitle: "",
        type: "checkbox",
        text: "Recieve updates about Tray.io product by email ",
        required: false,
      },
      {
        fieldTitle: "",
        type: "checkbox",
        text:
          "Recieve communication by email for other products created by the Tray.io team ",
        required: false,
      },
    ],
  },
];
function App() {
  const [currentIndex, setIndex] = useState(0);
  const [formState, setFormState] = useState(initialFormData);

  const onSubmitCallback = useCallback(() => {
    if(currentIndex + 1 < formState.length) {
      setIndex(currentIndex + 1);
    } else if(currentIndex + 1 === formState.length) {
      console.log('dummy submit', formState);
    }
  }, [currentIndex, formState]);

  return (
    <div className="App">
      <SectionView
        onSubmit={onSubmitCallback}
        currentIndex={currentIndex}
        sections={formState}
      />
    </div>
  );
}

export default App;
