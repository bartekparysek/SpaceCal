import { render, screen, waitFor } from '../../test-utils/testing-library-utils';
import { BrowserRouter as Router, } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import FlightList from "../FlightList";




describe('Flight List,', () => {

   test('renders next launch and upcoming launches', async () => {
      render(
         <Router >
            <FlightList />
         </Router>
      )

      const nextLaunchName = await screen.findByRole('heading', { name: /crs-23/i });
      expect(nextLaunchName).toBeInTheDocument();

      const upcomingLaunch = screen.getByRole('heading', { name: /crew-3/i });
      expect(upcomingLaunch).toBeInTheDocument();
   })

   test('shows details of flight', async () => {
      render(
         <Router >
            <FlightList />
         </Router>
      )

      const detailsLink = await screen.findByTestId('details-link');
      expect(detailsLink).toBeInTheDocument();

      userEvent.click(detailsLink);

      waitFor(async () => {
         const detailsHeader = await screen.findByRole('heading', { name: /Flight Details/i });
         expect(detailsHeader).toBeInTheDocument();
         const flightListButton = await screen.findByRole('button', { name: /Flight List/i });
         expect(flightListButton).toBeInTheDocument();

         userEvent.click(flightListButton);

         const nextLaunch = await screen.findAllByRole('heading', { name: /Next Launch/i });
         expect(nextLaunch).toBeInTheDocument();
      })
   })

});