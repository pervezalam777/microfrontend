let authenticationToken = null;

const validateToken = (token) => {
  return true;
}

export const setAuthToken = (token) => {
  if(validateToken(token)){
    authenticationToken = token; 
    //should be jwt token with all user details in it.
    
    //TODO: all the details of user and expiry time.
    // add it to session or local storage based on
    // use case
    
    // Add timeout based on user session expiry time.
  } else {
    throw new Error('Token is not valid');
  }
};

export const getAuthToken = () => {
  if(authenticationToken) {
    return authenticationToken;
  }
  // TODO: read token from session or local storage
  // if available set it to authentication token
  // and return
  return null;
};

export const getUserDetails = () => {
  if(getAuthToken()) {
    // extract user details from token
    // if token expired already return null;
  }
  return null;
};
