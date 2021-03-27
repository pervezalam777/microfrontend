// External dependencies
import React from 'react';
/* eslint-disable import/no-unresolved */
// NOTE: following is the way to import shared microfrontend service
//import { EventService } from 'mfShared/Services';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import './styles/styleFrntHost.scss';

/**
 * App component
 */
function App() {
  return (
    <div className='front-host'>
      Front facing host application
    </div>
  );
} 

export default App;
