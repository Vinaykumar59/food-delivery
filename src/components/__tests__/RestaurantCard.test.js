import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { OpenedRestaurant } from "../RestaurantCard";

// // Mock RestaurantCard component
jest.fn("../RestaurantCard", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked RestaurantCard</div>),
}));

describe("Opened restaurant card mock ", () => {
  it("should render RestaurantCard Component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
  });

//   test case for higher order component
//   it("should render  RestaurantCard Component if it is open", () => {
//     render(
//       <OpenedRestaurant >
//         <RestaurantCard  resData={MOCK_DATA}/>
//       </OpenedRestaurant>
//     );
//     const name = screen.getByText("Pizza Hut");
//     console.log(name);
//     const openedres = name.parentElement.querySelector(".opened")
//     // const openedres = screen.getByText("Opened");

//     expect(openedres).toBeInTheDocument();
//   });
});
