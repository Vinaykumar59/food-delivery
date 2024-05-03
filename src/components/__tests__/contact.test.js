import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// describe groups a couple of test cases, we can have multiple groups within a single test file 
describe("contact us page test cases", () => {

  // this function runs before all the tasks/test cases
  beforeAll(() => {
    console.log("beforeAll");
  })

  // this gets executed before each of the test cases;
  beforeEach(() => {
    console.log("before each");
  })

  // after all is called after all the test cases are completed executing
  afterAll(() => {
    console.log("after all");
  })

  // after each is called after each executing each and every test case
  afterEach(() => {
    console.log("after each");
  })
  

  test("should load the contact us page", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    // assertion , toBeInTheDocument is used to check if an element is in the document
    expect(heading).toBeInTheDocument();
  });

  // for button
  test("should check for a button with text submit", () => {
    render(<ContactUs />);
    // getByText gets an element with specified text
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  // for input
  //   test is the name of the function, test can also be written as it

  it("should check for a input field to be in the document", () => {
    render(<ContactUs />);

    // getByPlaceholderText gets an input field with placeholder of specified value
    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  // for 2 input  fields
  it("should check for a input field to be in the document", () => {
    render(<ContactUs />);

    //getAllByRole -> is used to get multiple items, "textbox" -> specifies an input field
    // querying
    const inputBoxes = screen.getAllByRole("textbox");

    // this checks for 2 input boxes
    expect(inputBoxes.length).toBe(2);

    expect(inputBoxes.length).not.toBe(3);
    // .toBeTruthy() will be used to check for true values
  });
});
