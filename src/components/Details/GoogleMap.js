import React from 'react'


const GoogleMap = ({ lat, lng }) => {
  return (
    <iframe
      width="450"
      height="250"
      style={{ border: "none" }}
      title="flighLaunchPad"
      framerborder="0"
      src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_GOOGLE_API_KEY}&center=${lat},${lng}&zoom=12`}
    />
  )
}

export default GoogleMap
