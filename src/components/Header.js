import React from 'react';
import Link from './Link';
import { Section } from './Details/DetailsView';
import ImportScript from './customHooks/ImportScript';



const Header = ({ children }) => {
   ImportScript('https://apis.google.com/js/api.js');
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