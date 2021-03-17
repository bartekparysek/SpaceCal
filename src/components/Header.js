import React from 'react';
import GoogleAuth from './GoogleAuth';
import Link from './Link';
import { StyledWrapper } from './FlightDetails';


const Header = () => {
   return (
      <React.Fragment>
         <StyledWrapper>
            <Link to="/" >
               <h1>SpaceCal 🚀</h1>
            </Link>
            <GoogleAuth />
         </StyledWrapper>
      </React.Fragment>
   );
}

export default Header;