import { configureStore } from '@reduxjs/toolkit'
import { viewerSlice } from './viewer'

export const store = configureStore({
  reducer: {
    viewer: viewerSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 }
  })
})
