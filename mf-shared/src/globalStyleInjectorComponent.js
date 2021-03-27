// External dependencies
import React from 'react';

// Internal dependencies
import './styles/styleShared.scss';

function GlobalStyleInjectorComponent() {
  return (<div className='sh-shared__' data-testid='globalStyle'></div>);
}

export default GlobalStyleInjectorComponent;