import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type NavBarType = {
  sections: 'home' | 'films' | 'series' | 'famous'
}

const initialState: NavBarType = {
  sections: 'home'
}

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    changeSection: (
      state,
      action: PayloadAction<'home' | 'films' | 'series' | 'famous'>
    ) => {
      if (action.payload != undefined) {
        state.sections = action.payload
      }
    }
  }
})

export const { changeSection } = navBarSlice.actions

export default navBarSlice.reducer
