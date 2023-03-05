import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  pages: 0,
  characters: [],
  location: [],
  episodes: [],
  auth: ''
}

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.characters = action.payload.characters
      state.pages = action.payload.pages
    },
    setLocation: (state, action) => {
      state.location = action.payload.location
      state.pages = action.payload.pages
    },
    setEpisode: (state, action) => {
      state.episodes = action.payload.episodes
      state.pages = action.payload.pages
    },
    setAuth: (state, action) => {
      state.auth = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCharacter, setEpisode, setLocation, setAuth } = viewerSlice.actions
export default viewerSlice.reducer
