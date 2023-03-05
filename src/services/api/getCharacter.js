import { baseApi } from './baseApi'

export const getCharacter = (page = 0, name = '') => {
  const character = baseApi.get(`/character/?page=${page}&name=${name}`)
  return character
}
