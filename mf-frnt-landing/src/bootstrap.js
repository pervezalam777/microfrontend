// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable import/no-unresolved */
import GlobalStyleInjectorComponent from 'mfShared/globalStyleInjectorComponent';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import App from './AppLanding';

/**
 * Render Application
 * @returns {ReactElement}
 */
function RenderApp() {
  return (
    <>
      <GlobalStyleInjectorComponent />
      <App />
    </>
  );
}


ReactDOM.render(<RenderApp />, document.getElementById('root'));
