
const listeners = {};

export const GLOBAL_EVENTS = {
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',
  USER_LOGGED_IN_STATUS: 'USER_LOGGED_IN_STATUS',
  
  SCROLL_TO:'SCROLL_TO'
};

/**
 * Dispatch event that can be listen by other micro front end
 * @param {Object} event contains event name and payload 
 */
export const dispatch = (event) => {
  const eventListeners = listeners[event.name] || [];
  eventListeners.forEach((fn) => fn(event));
};

/**
 * Subscribe to global events for all micro frontend. 
 * @param {String} eventName should match one of name in global event
 * @param {Function} listenerFunction listener function
 */
export const subscribe = (eventName, listenerFunction) => {
  if(!globalEvents[eventName]) {
    throw `${eventName} is not defined in global event`;
  }

  let eventListeners = listeners[eventName] || [];
  if(eventListeners.includes(listenerFunction)) {
    throw 'Already registered';
  }
  eventListeners.push(listenerFunction);
  listeners[eventName] = eventListeners;

  return () => {
    let eventListeners = listeners[eventName] || [];
    listeners[eventName] = eventListeners.filter((fn) => fn !== listenerFunction);
  };
};