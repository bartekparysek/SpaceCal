import React from 'react';
import GoogleAuth from './GoogleAuth';
import Link from './Link';
import { Section } from './FlightDetails';


const Header = () => {
   return (
      <React.Fragment>
         <Section>
            <Link to="/" >
               <h1>SpaceCal 🚀</h1>
            </Link>
            <GoogleAuth />
         </Section>
      </React.Fragment>
   );
}

export default Header;