import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://canv-back.visualinnovate.me/"

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Length'] = '42334'
axios.defaults.headers.common['Content-Encoding'] = 'gzip'
axios.defaults.headers.common['Transfer-Encoding'] = 'chunked'

if(localStorage.getItem('appLang')){
  axios.defaults.headers.common['local'] = localStorage.getItem('appLang')
}else{
  axios.defaults.headers.common['local'] = "ar"
}


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
