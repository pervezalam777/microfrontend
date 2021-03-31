import { createReducer } from '@reduxjs/toolkit'

import * as actions from './actions';


const initialState = { selected: [] }

export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addToSelected, (state, action) => {
      state.selected.push(action.payload);
    })
})