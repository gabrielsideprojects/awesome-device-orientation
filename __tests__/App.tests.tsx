import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Test from "../components/Test";
import { Dimensions } from "react-native";

jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  return {
    get: jest.fn().mockImplementation((param: string) => {
      let dimensions = {
        window: {
          width: 50,
          height: 400,
          scale: 20,
          fontScale: 30,
        },
      };
      return dimensions[param];
    }),
  };
});
describe("First Input", () => {
  it("should be able to insert a text in the first input", () => {
    const { getByTestId, debug } = render(<Test />);
    const firstInput = getByTestId("firstInput");
    fireEvent.changeText(firstInput, "oi");
    expect(firstInput.props.value).toEqual("oi");
  });
});
describe("Device orientation", () => {
  afterEach(() => jest.clearAllMocks());
  it("should have the vertical device style", async () => {
    const { getByTestId, debug } = render(<Test />);
    const view = getByTestId("mainContainer");

    fireEvent(view, "onLayout");

    await waitFor(async () =>
      expect(view).toHaveStyle({
        flexDirection: "column",
      })
    );
  });
  it("should have the horizontal style", async () => {
    Dimensions.get.mockImplementation(
      jest.fn().mockImplementation((param: string) => {
        let dimensions = {
          window: {
            width: 400,
            height: 50,
            scale: 20,
            fontScale: 30,
          },
        };
        return dimensions[param];
        // Now we can track calls to playSoundFile
      })
    );
    const { getByTestId, debug } = render(<Test />);
    const view = getByTestId("mainContainer");
    fireEvent(view, "onLayout");

    await waitFor(async () =>
      expect(view).toHaveStyle({
        flexDirection: "row",
      })
    );
  });
});
