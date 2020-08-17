import React from "react";
import "./App.scss";
import { MultiStageForm } from "./Form/MultiStageForm";

// This will simply be just a wrapping file,
// form logic will be self contained within MultiStageForm
function App() {
  return (
    <div className="App">
      <MultiStageForm />
    </div>
  );
}

export default App;
