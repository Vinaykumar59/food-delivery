import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render searched cards with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const resCards = screen.getAllByTestId("res-card");

  expect(searchBtn).toBeInTheDocument();
  expect(resCards.length).toBe(2);
});

it("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRestaurantsBtn = screen.getByTestId("top-restaurants");
  fireEvent.click(topRestaurantsBtn);
  const filteredRestaurants = screen.getAllByTestId("res-card");

  expect(topRestaurantsBtn).toBeInTheDocument();
  expect(filteredRestaurants.length).toBe(7);
});
