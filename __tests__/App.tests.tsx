import React from "react";
import { render } from "@testing-library/react-native";
import Test from "../components/Test";

describe("App Page", () => {
  it("should be able to show App component", () => {
    const { debug } = render(<Test />);
  });
});
