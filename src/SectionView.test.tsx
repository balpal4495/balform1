import React from "react";
import { render } from "@testing-library/react";
import { SectionView } from "./SectionView";

describe(":SectionView tests", () => {
  describe(":Render", () => {
    describe(":Given valid JSON", () => {
      it("Should display the correct fields", () => {
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

        const { getByText } = render(<SectionView {...validData} />);
        const nameElement = getByText(/name/i);
        expect(nameElement).toBeInTheDocument();

      });

      describe(":Given invalid JSON", () => {
        const inValidData = {
          sections: [{ title: null, fields: null }],
        };

        it("Should only display an error", () => {
          const { getByText } = render(<SectionView {...inValidData} />);
          const errorElement = getByText(/Error something went wrong/i);
          expect(errorElement).toBeInTheDocument();
        });
      });
    });
  });
});
