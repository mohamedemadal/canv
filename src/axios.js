import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://canv-back.visualinnovate.me/"

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Length'] = '42334'
axios.defaults.headers.common['Content-Encoding'] = 'gzip'
axios.defaults.headers.common['Transfer-Encoding'] = 'chunked'
axios.defaults.headers.common['local'] = localStorage.getItem('appLang')

axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = `Bearer $pbkdf2-sha512$25000$sDYGoBQCwDgnhFBKSem9Fw$sapl5rTjv3ONcISw199KDAP4VuCRoaT0SZgxFk3jZJIoLEDgXSgsj7tK3c1g.1QgLPoVPm.I6RpRyWQVIBh4jg`
  } catch (error) {
    config.headers.Authorization = `Bearer $pbkdf2-sha512$25000$sDYGoBQCwDgnhFBKSem9Fw$sapl5rTjv3ONcISw199KDAP4VuCRoaT0SZgxFk3jZJIoLEDgXSgsj7tK3c1g.1QgLPoVPm.I6RpRyWQVIBh4jg`
  }
  config.headers.Accept = 'application/json'
  // config.headers["Content-Type"] = "application/json";
  return config
})
