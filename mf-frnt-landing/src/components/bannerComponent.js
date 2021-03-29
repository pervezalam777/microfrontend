// External dependencies
import React from 'react';

// Internal dependencies
import { banner } from '../content/data';

/**
 * Banner component
 */
function BannerComponent() {
  return (
    <div className='landing-banner'>
      <ul className='landing-banner__slide'>
        {
          banner.list.map(({ pId, img, alt }) => (
            <li key={pId}>
              <img src={img} alt={alt} className='landing-banner__slide-img'/>
            </li>
          ))
        }
      </ul>
      <button className='landing-banner__btn landing-banner__btn--left'>Previous</button>
      <button className='landing-banner__btn landing-banner__btn--right'>Next</button>
    </div>
  );
}

export default BannerComponent;