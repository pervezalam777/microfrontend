// External dependencies
import React from 'react';

// Internal dependencies
import GlobalStyleInjectorComponent from './globalStyleInjectorComponent';
import {
  CheckBoxComponent,
  RadioButtonComponent
} from './components';

/**
 * App component
 */
function App() {
  return (
    <>
      <GlobalStyleInjectorComponent />
      <div className='shared'>
        <section>
          <h2>Checkbox component</h2>
          <section>
            <h3>checkbox with label</h3>
            <CheckBoxComponent label='Agreed' />
          </section>
          <section>
            <h3>checkbox without label</h3>
            <CheckBoxComponent />
          </section>
        </section>
        <section>
          <h2>Radio button component</h2>
          <section>
            <h3>radio button with label</h3>
            <RadioButtonComponent label='Agreed' />
          </section>
          <section>
            <h3>radio button without label</h3>
            <RadioButtonComponent />
          </section>
        </section>
      </div>
    </>
  );
} 

export default App;
