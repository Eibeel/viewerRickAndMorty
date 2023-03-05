import { baseApi } from './baseApi'

export const getLocation = (page = 0) => {
  const location = baseApi.get(`/location/?page=${page}`)
  return location
}
