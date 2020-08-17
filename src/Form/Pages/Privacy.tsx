import React from "react";
import { FormData } from "../../Shared/types";

interface Props {
  onSubmit: (formData: FormData) => void;
}

export function Privacy(props: Props) {
  const { onSubmit } = props;

  function handleSubmit() {
    const formData: FormData = {
      section: "Privacy",
      fields: {
        checkTrayInput: false,
        checkOtherInput: false,
      },
    };

    onSubmit(formData);
  }

  return (
    <>
      <div>
        <div>Recieve updates about Tray.io product by email</div>
        <input type="checkbox" />
      </div>
      <div>
        <div>
          Recieve communication by email for other products created by the
          Tray.io team
        </div>
        <input type="checkbox" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
