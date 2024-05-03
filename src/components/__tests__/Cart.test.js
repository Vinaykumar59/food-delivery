import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/AppStore";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import RES_MENU_MOCK from "../../mocks/resMenuMock.json";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RES_MENU_MOCK)
        }
    })
})

it("should cover the entire flow from restaurant menu to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const recommended = screen.getByText("Recommended");
  expect(recommended).toBeInTheDocument();

  fireEvent.click(recommended);
  const addBtns = screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtns[0]);

  const cartText = screen.getByText("Cart(1)");
  expect(cartText).toBeInTheDocument();

  const cartItems = screen.getAllByRole("button", {name: "Add +"});
  console.log(cartItems.length);
  expect(cartItems.length).toBe(21)
});
