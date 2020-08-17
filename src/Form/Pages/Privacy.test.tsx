import React from "react";
import { render } from "@testing-library/react";
import { Privacy } from "./Privacy";

describe(":Privacy tests", () => {
  describe(":render", () => {
    it("Should render specific text for checkbox 1", () => {
      const { getByText } = render(<Privacy />);
      const checkbox1Text = getByText(
        /Recieve updates about Tray.io product by email/
      );
      expect(checkbox1Text).toBeInTheDocument()
    });
    it("Should render specific text for checkbox 2", () => {
      const { getByText } = render(<Privacy />);
      const checkbox2Text = getByText(
        /Recieve communication by email for other products created by the Tray.io team/
      );
      expect(checkbox2Text).toBeInTheDocument()
    });
    it("Should render two checkbox elements", () => {
      const { getAllByRole } = render(<Privacy />);
      const checkboxelements = getAllByRole('checkbox');
      expect(checkboxelements.length).toBe(2);
    });
    it("Should render the submit button", () => {
      const { getByText } = render(<Privacy />);
      const buttonElement = getByText(/Submit/);
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
