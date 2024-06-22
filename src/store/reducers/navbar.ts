import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type navBar = {
  sections: 'inicio' | 'filmes' | 'séries' | 'famosos'
}

const initialState: navBar = {
  sections: 'inicio'
}

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    changeSection: (
      state,
      action: PayloadAction<'inicio' | 'filmes' | 'séries' | 'famosos'>
    ) => {
      if (action.payload != undefined) {
        state.sections = action.payload
      }
    }
  }
})

export const { changeSection } = navBarSlice.actions

export default navBarSlice.reducer
