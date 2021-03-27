// External dependencies
import React from 'react';

// Internal dependencies
import GlobalStyleInjectorComponent from './globalStyleInjectorComponent';

/**
 * App component
 */
function App() {
  return (
    <>
      <GlobalStyleInjectorComponent />
      <div className='shared'>
        layout and component should be placed here.
      </div>
    </>
  );
} 

export default App;
