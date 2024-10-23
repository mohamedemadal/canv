import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import * as PusherPushNotifications from '@pusher/push-notifications-web'
export const load = ref(false)
export const error = ref('')

export const useAuthStore = defineStore('Auth', {
  state: () => ({
    authUser: useStorage('authUser', {}),
    authenticated: useStorage('authenticated', false),
    userPermissions: useStorage('userPermissions', []),
    authErrors: [],
    role: '',
    token: useStorage('token', null),
    msg: '',
    loading: ref(false),
    router: useRouter(),
  }),
  getters: {
    user: (state) => state.authUser,
    permissions: (state) => state.userPermissions,
    errors: (state) => state.authErrors,
    successMsg: (state) => state.msg,
  },
  actions: {
    async getUser() {
      if (this.authenticated == true && this.authUser) {
        const response = await axios.get('api/get-user')
      }
    },
    async handleLogin(data) {
      this.resetAuthStore();
      load.value = true;

      try {
        const response = await axios.post('/api/canv/user_login', {
          login: data.login,
          lang: localStorage.getItem('appLang'),
          password: data.password,
          db: "live"
        });

        if (response?.data?.session_id) {
          // Send session ID to the canv.sa domain to set the cookie
          await axios.post('https://canv.sa/api/set_session_cookie', {
            session_id: response.data.session_id
          }, {
            withCredentials: true // Make sure this is set to send cookies to the correct domain
          });

          load.value = false;

          // Redirect or take further actions
        } else {
          error.value = "Email or password doesn't match our records";
          load.value = false;
        }
      } catch (error) {
        console.error('Login error:', error);
        error.value = "An error occurred during login";
        load.value = false;
      }
    },

    async handleRegister(data) {
      if (this.loading) return
      this.resetAuthStore()
      this.loading = true
      try {

        const response = await axios.post('/api/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        })

      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      } finally {
        this.loading = false
      }
    },
     handleLogout() {
      this.resetAuthStore()
      this.userPermissions = ''
      this.router.push({ name: 'Login' })


    },
    async forgotPassword(data) {
      try {
        this.resetAuthStore()
        const response = await axios.post('/api/forgot-password', {
          email: data.email,
        })
        this.msg = response.data.status
        this.router.push({ name: 'ResetPassword' })
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        } else {
          // handling exceptions from frontend prespective only
          let errors = []
          let exceptionArr = []
          exceptionArr.push(error.response.data.message)
          errors.push(exceptionArr)
          this.authErrors = errors
        }
      }
    },
    async resetPassword(data) {
      try {
        await axios.post('/api/reset-password', data)
        this.router.push({ name: 'Login' })
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    resetAuthStore() {
      this.authUser = null
      this.token = null
      this.authenticated = false
      this.userPermissions = null
      this.authErrors = []
      this.msg = ''
      this.loading = false
    },
  },
})
