// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
/* eslint-disable import/no-unresolved */
import GlobalStyleInjectorComponent from 'mfShared/globalStyleInjectorComponent';
import {store} from 'mfShared/store';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import App from './AppLanding';

/**
 * Render Application
 * @returns {ReactElement}
 */
function RenderApp() {

  return (
    <Provider store={store}>
      <GlobalStyleInjectorComponent />
      <App />
    </Provider>
  );
}


ReactDOM.render(<RenderApp />, document.getElementById('root'));
