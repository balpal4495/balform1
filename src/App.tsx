import React, { useState } from 'react';
import { SectionView } from './SectionView';
import './App.css';
import { Section } from './types';

const initialFormData: Section[]  = [
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
        text: "Recieve updates about Tray.io product by email",
        required: false,
      },
      {
        fieldTitle: "",
        type: "checkbox",
        text:
          "Recieve communication by email for other products created by the Tray.io team",
        required: false,
      },
    ],
  },
]
function App() {

  const [currentIndex, setIndex] = useState(0);
  const [formState, setFormState] = useState(initialFormData);
  const onSubmit = () => {
    console.log('dummy submit');
  }


  return (
    <div className="App">
      <SectionView onSubmit={onSubmit} currentIndex={currentIndex} sections={formState} />
    </div>
  );
}

export default App;
