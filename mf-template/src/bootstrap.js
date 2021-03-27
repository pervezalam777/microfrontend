// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable import/no-unresolved */
import CSSInjectorComponent from 'mfSharedLibrary/globalStyleComponent';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import App from './App(mf-name)';

function RenderApp() {
  return (
    <>
      <CSSInjectorComponent />
      <App />
    </>
  );
}


ReactDOM.render(<RenderApp />, document.getElementById('root'));
