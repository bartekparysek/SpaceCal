import React from 'react';
import Link from './Link';
import { Section } from './Details/DetailsView';
import { useImportScript } from './customHooks/UseImportScript';

const Header = ({ children }) => {
   useImportScript('https://apis.google.com/js/api.js', 2000)
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