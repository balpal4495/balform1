import React, { useState } from "react";
import { FormData } from "../../Shared/types";
import './Privacy.scss';

interface Props {
  onSubmit: (formData: FormData) => void;
}

export function Privacy(props: Props) {
  const { onSubmit } = props;
  
  const [checkTray, setTrayCheck] = useState<boolean>(false);
  const [checkOther, setOtherCheck] = useState<boolean>(false);

  function handleTray() {
    setTrayCheck(!checkTray);
  }
  function handleOther() {
    setOtherCheck(!checkOther);
  }

  function handleSubmit() {
    const formData: FormData = {
      section: "Privacy",
      fields: {
        checkTrayInput: checkTray,
        checkOtherInput: checkOther,
      },
    };

    onSubmit(formData);
  }

  return (
    <>
    <div className="privacy">
      <div className="privacy-checkbox-container" onClick={handleTray}>
        <input type="checkbox"  checked={checkTray} aria-label="tray-product-input" onChange={handleTray} />
        <div>Recieve updates about Tray.io product by email</div>
      </div>
      <div className="privacy-checkbox-container" onClick={handleOther}>
        <input type="checkbox" checked={checkOther} aria-label="tray-other-input" onChange={handleOther} />
        <div>
          Recieve communication by email for other products created by the
          Tray.io team
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  );
}
