// External dependencies
import React from 'react';
/* eslint-disable import/no-unresolved */
import { EventService } from 'spSharedLibrary/Services';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import SearchIcon from './assets/svgs/search.svg';
import './styles/sellerCount.scss';

/**
 * App component
 */
function App() {
  function handleRegisterNow(e) {
    e.preventDefault();
    const { globalEvents, dispatch } = EventService;
    dispatch({ name:globalEvents.SCROLL_TO, payload:{ 'id': 'registerNow' } });
  }

  return (
    <div className='sp-seller-count'>
      <h1 className='sp-heading sp-heading-xl sp-heading__white'>Join over 12,000+ Sellers in over 30,000 cities today.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onClick={handleRegisterNow} className='sp-btn btn-register-now'>Register Now</button>
      <SearchIcon className='sp-search sp-search-left' />
      <SearchIcon className='sp-search sp-search-right' />
    </div>
  );
} 

export default App;
