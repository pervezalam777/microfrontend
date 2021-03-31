// External dependencies
import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* eslint-disable import/no-unresolved */
// NOTE: following is the way to import shared microfrontend service
//import { EventService } from 'mfShared/Services';
/* eslint-enable import/no-unresolved */

// Internal dependencies
import { initialize, destroy} from './store/configuration';
import * as action from './store/actions';
import BannerComponent from './components/bannerComponent';
import './styles/styleLanding.scss';

initialize()

/**
 * App component
 */
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log('user ', user)
  useEffect(() => {
    dispatch(action.addToSelected('10'));
    return () => {
      console.log('Should only called once')
      destroy();
    }
  }, [])

  return (
    <div className='lading-app'>
      <BannerComponent />
    </div>
  );
} 

export default App;
