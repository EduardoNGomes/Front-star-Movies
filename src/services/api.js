import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.21.202.140:8080',
})