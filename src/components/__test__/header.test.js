import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore";
import Header from "../Header";

describe("testing header component", () => {
  it("should render the login/logout button in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const button = screen.findAllByRole("button");
    expect(button).toBeInTheDocument();
  });
});
