import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../Container'
import spaceX from '../../apis/spaceX';
import FlightCard from '../FlightCard';

const LeftSide = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 1rem;
`;
const RightSide = styled.div`
   padding: 0 1rem;
`;
const Home = styled.div`
   display:flex;
   justify-content: space-between;
`;

const HomeView = () => {
   const [flights, setFlights] = useState(null);
   const [launchpads, setLaunchpads] = useState(null);

   useEffect(() => {
      const fetchFlights = async () => {
         const response = await spaceX.get('/launches/upcoming');
         setFlights(response.data);
      }
      const fetchLaunchPads = async () => {
         const response = await spaceX.get('/launchpads')
         setLaunchpads(response.data);
      }
      fetchFlights();
      fetchLaunchPads();
   }, [])


   const launchpad = (launchpadId) => {
      if (launchpads) {
         const launchpadData = launchpads.filter(pad => pad.id === launchpadId);
         return launchpadData[0];
      }
   }

   return (
      <Home>
         <LeftSide>
            <Container title={"Next launch"}>
               {flights && <FlightCard flight={flights[0]} launchpad={launchpad(flights[0].launchpad)} />}
            </Container>
            <Container title={"August 2021"}></Container>
         </LeftSide>

         <RightSide>
            <Container title={"Upcoming launches"}></Container>
         </RightSide>
      </Home>

   );
}

export default HomeView;