import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load  header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

// If there are multiple buttons, get a button by its text in below way
    const loginButton = screen.getByRole("button", {name: "Login"});

//   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Sholud render a header with 0 cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const cartText = screen.getByText("Cart(0)");

    // match regex
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument()
})

it("Sholud change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const LogoutButton = screen.getByRole("button", {name: "Logout"});

    expect(LogoutButton).toBeInTheDocument()
})