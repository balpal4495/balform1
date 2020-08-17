import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe(':App', () => {
  describe(':render', () => {
    describe('first page of form', () => {
      it('Should display the correct input labels', () => {
        const { getByText } = render(<App />);
        const nameElement = getByText(/name/i);
        const roleElement = getByText(/role/i);
        const emailElement = getByText(/email/i);
        const passwordlement = getByText(/password/i);
        expect(nameElement).toBeInTheDocument();
        expect(roleElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
        expect(passwordlement).toBeInTheDocument();
      });
      it('Should display the correct input fields', () => {
        const { getByPlaceholderText } = render(<App />);
        const nameInputElement = getByPlaceholderText('Name');
        const roleInputElement = getByPlaceholderText('Role');
        const emailInputElement = getByPlaceholderText('Email');
        const passwordInputElement = getByPlaceholderText('Password');
        expect(nameInputElement).toBeInTheDocument();
        expect(roleInputElement).toBeInTheDocument();
        expect(emailInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
      });
      it('Should display the submit button', () => {
        const { getByText } = render(<App />);
        const submitElement = getByText(/Submit/i);
        expect(submitElement).toBeInTheDocument();
      })
    })
  })
})