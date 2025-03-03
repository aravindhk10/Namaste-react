import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component testing", () => {
  test("should load the heading in contact page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load the button in contact page", () => {
    render(<Contact />); //render
    const button = screen.getByRole("button"); //querying
    expect(button).toBeInTheDocument(); //asertion
  });

  test("should load the inputboxes in contact page", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });

  test("should load the inputboxe using placeholders in contact page", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("name");
    expect(placeholder).toBeInTheDocument();
  });
});
