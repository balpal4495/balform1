import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SectionView } from "./SectionView";

const validData = {
  sections: [
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
  ],
};

describe(":SectionView tests", () => {
  describe(":Render", () => {
    describe(":Given valid JSON", () => {
      it("Should display the correct fields", () => {
        const onSubmit = jest.fn();
        const { getByText } = render(
          <SectionView {...validData} currentIndex={0} onSubmit={onSubmit} />
        );
        const nameElement = getByText(/name/i);
        const roleElement = getByText(/role/i);
        const emailElement = getByText(/email/i);
        const passwordlement = getByText(/password/i);
        expect(nameElement).toBeInTheDocument();
        expect(roleElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
        expect(passwordlement).toBeInTheDocument();
      });

      it("Should display the correct fields from a different section of the form", () => {
        const onSubmit = jest.fn();
        const { getByText } = render(
          <SectionView {...validData} currentIndex={1} onSubmit={onSubmit} />
        );
        const checkboxOneElement = getByText(
          /Recieve updates about Tray.io product by email/
        );
        const checkboxTwoElement = getByText(
          /Recieve communication by email for other products created by the Tray.io team/
        );

        expect(checkboxOneElement).toBeInTheDocument();
        expect(checkboxTwoElement).toBeInTheDocument();
      });
    });
  });

  describe(":Click events", () => {
    describe(":Given valid JSON", () => {
      describe(":Given a click on the submit button on first screen", () => {
        it("Should display the second screen", async () => {
          const onSubmit = jest.fn();
          const { getByText, rerender } = render(
            <SectionView {...validData} currentIndex={0} onSubmit={onSubmit} />
          );

          const submitButton = getByText(/Submit/i);
          userEvent.click(submitButton);
          expect(onSubmit).toHaveBeenCalledTimes(1);

          rerender(
            <SectionView {...validData} currentIndex={1} onSubmit={onSubmit} />
          );

          const checkboxOneElement = getByText(
            /Recieve updates about Tray.io product by email/
          );
          const checkboxTwoElement = getByText(
            /Recieve communication by email for other products created by the Tray.io team/
          );
  
          expect(checkboxOneElement).toBeInTheDocument();
          expect(checkboxTwoElement).toBeInTheDocument();
        });
      });
    });
  });
});
