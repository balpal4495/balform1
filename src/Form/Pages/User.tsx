import React, { useState } from "react";

import { isEmailValid, isPasswordValid } from "../../Shared/utils";

function validateName(name: string) {
  if (name === "") {
    return "Name must not be empty";
  }

  return "";
}

function validateEmail(email: string) {
  if (email === "") {
    return "Email must not be empty";
  }

  if (!isEmailValid(email)) {
    return "Email must be valid";
  }

  return "";
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

  return "";
}
export function User() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateAndSubmitForm() {
    const nameValidation = validateName(name);
    setNameError(nameValidation);

    const emailValidation = validateEmail(email);
    setEmailError(emailValidation);

    const passwordValidation = validatePassword(password);
    setPasswordError(passwordValidation);
  }

  return (
    <>
      <div>
        <div>Name</div> {nameError && <span>{nameError}</span>}
        <input
          name="name"
          aria-label="name-input"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <div>Role</div>
        <input name="role" placeholder="Role" type="text" />
      </div>
      <div>
        <div>Email</div> {emailError && <span>{emailError}</span>}
        <input
          name="email"
          placeholder="Email"
          type="text"
          aria-label="email-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <div>Password</div>
        {passwordError && <span>{passwordError}</span>}
        <input
          name="password"
          placeholder="Password"
          type="password"
          aria-label="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button onClick={validateAndSubmitForm}>Submit</button>
    </>
  );
}
