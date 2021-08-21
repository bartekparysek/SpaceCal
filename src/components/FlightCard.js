import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CardA = styled.div`
background-color:#F7F7F7;

`;
//  CSS for styling three dot button in card
//top: 0;
// right: 0;
// padding: 33px 30px;
// z-index: 6;

const CardB = styled.div`

`


const FlightCard = ({ flight }) => {
  // hold state if its cardA or cardB side
  const flightDate = new Date(flight.date_utc);
  return (
    <CardA key={flight.id}>
      <h3>{flight.name}</h3>
      <p>{flightDate.toDateString()}</p>
      {/*
      - render launchpad name
      - render three dot button
      - make an animation

      */}


    </CardA>

  )
}

export default FlightCard
