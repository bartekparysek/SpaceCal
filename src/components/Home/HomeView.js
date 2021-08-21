import React, { useState, useEffect } from 'react';
import Container from '../Container'
import spaceX from '../../apis/spaceX';


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


   return (
      <div>
         <Container title={"Next Launch"} >

         </Container>
         <h2>Upcoming launches</h2>

      </div>

   );
}

export default HomeView;