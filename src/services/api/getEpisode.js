import { baseApi } from './baseApi'

export const getEpisode = (page = 0) => {
  const episode = baseApi.get(`/episode/?page=${page}`)
  return episode
}
