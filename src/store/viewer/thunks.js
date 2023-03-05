import { getCharacter, getEpisode, getLocation } from '../../services/api'
import { setCharacter, setEpisode, setLocation } from './viewerSlice'

export const getCharacterAction = (page = 0, name = '', gender = '') => {
  return async (dispatch) => {
    const { data: { results } } = await getCharacter(page + 1, name, gender)
    dispatch(setCharacter({ characters: results, pages: page + 1 }))
  }
}

export const getLocationAction = (page = 0) => {
  return async (dispatch) => {
    const { data: { results } } = await getLocation(page + 1)
    dispatch(setLocation({ location: results, pages: page + 1 }))
  }
}

export const getEpisodeAction = (page = 0) => {
  return async (dispatch) => {
    const { data: { results } } = await getEpisode(page + 1)
    dispatch(setEpisode({ episodes: results, pages: page + 1 }))
  }
}
