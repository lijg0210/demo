import axios from 'axios'
const myAxios = axios.create({
  baseURL :'',
  timeout: 15000
})

myAxios.interceptors.request.use((reqConfig) => {
  return reqConfig
})

myAxios.interceptors.response.use((response) => {
  return response.data
}, (err) => {
  return Promise.reject(err)
})

export default myAxios