import { createAction, createReducer } from '@reduxjs/toolkit'

const userLoggedIn = createAction('user/loggedIn')
const userLoggedOut = createAction('user/loggedOut')

console.log('env check', process.env.NODE_ENV !== 'production')
const initialState = { user: null }

if(process.env.NODE_ENV !== 'production'){
  initialState.user = {
    name: 'Pervez',
    email: 'pervezalam777@gmail.com'
  }
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.user = action.payload
    })
    .addCase(userLoggedOut, (state) => {
      state.user = null;
    })
})