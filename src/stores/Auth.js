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
    user_name: useStorage('user_name', ''),
    profil: useStorage('profil', ''),
    user_id: useStorage('user_id', ''),
    authenticated: useStorage('authenticated', false),
    token: useStorage('token', null),
    router: useRouter(),
  }),
  getters: {

  },
  actions: {
    async getUser() {
      if (this.authenticated == true && this.authUser) {
        const response = await axios.get('api/get-user')
      }
    },
    async handleLogin(data) {
      this.resetAuthStore();
    const code=(data.otp).join("")

      try {
        const response = await axios.post('/api/user_login_verfication', {
          verfy_with:"sms",
          user_id:data.user_id,
          request_id:data.request_id,
          verfication_code:code,
          lang: localStorage.getItem('appLang'),
        });
        console.log(response?.data?.result?.data.verfid)
        if (response?.data?.result?.data.verfid) {
          this.authenticated = true
          this.token=response?.data?.result?.data.user_data.user_token
          this.user_name=response?.data?.result?.data.user_data.user_name
          this.user_id=response?.data?.result?.data.user_data.user_id
          this.profil=response?.data?.result?.data.user_data.profile
          this.router.push({ name: 'profile' })
        } else {

          alert("Email or password doesn't match our records")
        }
      } catch (error) {
        alert("Email or password doesn't match our records")
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
      this.profil=null
      this.authenticated = false
      this.authErrors = []
      this.msg = ''
      this.loading = false
      window.location.reload();
    },
  },
})
