import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://139.59.132.90:8069"

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['local'] = localStorage.getItem('appLang')

axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  } catch (error) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  config.headers.Accept = 'application/json'
  // config.headers["Content-Type"] = "application/json";
  return config
})
