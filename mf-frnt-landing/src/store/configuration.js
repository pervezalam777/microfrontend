/* eslint-disable import/no-unresolved */
import {store} from  'mfShared/store';
/* eslint-enable import/no-unresolved */

import reducer from './reducer'





const key = 'landing'
export function initialize() {
  store.injectReducer(key, reducer);
}

export function destroy() {
  store.withdrawReducer(key)
}