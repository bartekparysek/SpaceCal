import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../App";

describe("Flight List,", () => {
  test("renders next launch and upcoming launches", async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const nextLaunchName = await screen.findByText("CRS-23");
    expect(nextLaunchName).toBeInTheDocument();

    const upcomingHeading = await screen.findByText("Upcoming launches");
    expect(upcomingHeading).toBeInTheDocument();

    const upcomingLaunch = await screen.findByRole("heading", {
      name: /Starlink-29/i,
    });
    expect(upcomingLaunch).toBeInTheDocument();
  });
});
