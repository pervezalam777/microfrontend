// External dependencies
import React from 'react';
/* eslint-disable import/no-unresolved */
// NOTE: following is the way to import shared microfrontend service
//import { EventService } from 'mfShared/Services';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import './styles/styleBckHost.scss';

/**
 * App component
 */
function App() {
  return (
    <div className='back-office-host'>
      Back office application
    </div>
  );
} 

export default App;
