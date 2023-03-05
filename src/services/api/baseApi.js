import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})
