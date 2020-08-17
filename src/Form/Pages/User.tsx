import React, { useState } from "react";

import { isEmailValid, isPasswordValid } from "../../Shared/utils";
import { FormData } from "../../Shared/types";
import "./User.scss";

interface Props {
  onSubmit: (formData: FormData) => void;
}

// these validation steps could also live in the shared utils 
function validateName(name: string) {
  if (name === "") {
    return "Name must not be empty";
  }

  return false;
}

function validateEmail(email: string) {
  if (email === "") {
    return "Email must not be empty";
  }

  if (!isEmailValid(email)) {
    return "Email must be valid";
  }

  return false;
}

function validatePassword(password: string) {
  if (password === "") {
    return "Password must not be empty";
  }

  if (password.length < 9) {
    return "Password must be atleast 9 characters long";
  }

  if (!isPasswordValid(password)) {
    return "Password must contain 1 uppercase letter, 1 lowercase letter and a number";
  }

  return false;
}
export function User(props: Props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState<string | boolean>(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | boolean>(false);

  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | boolean>(false);

  function validateAndSubmitForm() {
    const nameValidation = validateName(name);
    setNameError(nameValidation);

    const emailValidation = validateEmail(email);
    setEmailError(emailValidation);

    const passwordValidation = validatePassword(password);
    setPasswordError(passwordValidation);

    if (
      nameValidation !== false ||
      nameValidation !== false ||
      passwordValidation !== false
    ) {
      return;
    } else {
      const formData: FormData = {
        section: "User",
        fields: { name: name, email: email, password: password, role: role },
      };
      onSubmit(formData);
    }
  }

  return (
    <>
      <div className="user">
        <div className="user-field-container">
          <div>Name</div> {nameError && <span>{nameError}</span>}
          <input
            className="user-field-container__input"
            name="name"
            aria-label="name-input"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="user-field-container">
          <div>Role</div>
          <input
            className="user-field-container__input"
            name="role"
            placeholder="Role"
            type="text"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="user-field-container">
          <div>Email</div> {emailError && <span>{emailError}</span>}
          <input
            className="user-field-container__input"
            name="email"
            placeholder="Email"
            type="text"
            aria-label="email-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="user-field-container">
          <div>Password</div>
          {passwordError && <span>{passwordError}</span>}
          <input
            className="user-field-container__input"
            name="password"
            placeholder="Password"
            type="password"
            aria-label="password-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="submit-button" onClick={validateAndSubmitForm}>
          Submit
        </button>
      </div>
    </>
  );
}
