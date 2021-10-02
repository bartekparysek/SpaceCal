import React from 'react';
import Link from './Link';
import { Section } from './Details/DetailsView';


const Header = ({ children }) => {
   return (
      <>
         <Section>
            <Link to="/" >
               <h1>SpaceCal</h1>
            </Link>

            {children}
         </Section>
      </>
   );
}

export default Header;