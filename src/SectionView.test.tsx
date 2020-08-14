import React from "react";
import { render } from "@testing-library/react";
import { SectionView } from "./SectionView";

describe(":SectionView tests", () => {
  describe(":Render", () => {
    describe(":Given valid JSON", () => {
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
      it("Should display the correct fields", () => {
        const { getByText } = render(
          <SectionView {...validData} currentIndex={0} />
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
        const { getByText } = render(
          <SectionView {...validData} currentIndex={1} />
        );
        const checkboxOneElement = getByText(
          "Recieve updates about Tray.io product by email"
        );
        const checkboxTwoElement = getByText(
          "Recieve communication by email for other products created by the Tray.io team"
        );

        expect(checkboxOneElement).toBeInTheDocument();
        expect(checkboxTwoElement).toBeInTheDocument();
      });
    });
  });
});
