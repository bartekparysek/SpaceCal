import React from 'react';
import GoogleAuth from './GoogleAuth';
import Link from './Link';
import { Section } from './Details/DetailsView';


const Header = () => {
   return (
      <React.Fragment>
         <Section>
            <Link to="/" >
               <h1>SpaceCal </h1>
            </Link>

            <GoogleAuth />
         </Section>
         <h2>Find your next flight...</h2>
      </React.Fragment>
   );
}

export default Header;