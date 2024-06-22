import { configureStore } from '@reduxjs/toolkit'
import navBarSlice from './reducers/navbar'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
