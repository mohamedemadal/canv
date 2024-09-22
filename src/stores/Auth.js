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
      // this.router.push({name: "admin"});

      this.resetAuthStore()
      load.value=true
      const response = await axios.post('/api/canv/user_login', {
        login: data.login,
        password: data.password,
        "db":"live"
      })



      // const headers = {
      //   Authorization: `"Bearer ${response.data.token}"`, // Headers your auth endpoint needs
      //   Accept: 'application/json', // Headers your auth endpoint needs
      // }
      // headers['Access-Control-Allow-Origin']='*'
      if (response.data?.result?.message == 'success') {

        load.value=true

        this.authUser = response.data.result.session_info


        // const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
        //   url: `${import.meta.env.VITE_API}/pusher/beams-auth`,
        //   queryParams: {
        //     user_id: `${response.data.user.id}`, // URL query params your auth endpoint needs
        //   },

        //   headers: {
        //     Authorization: `Bearer ${response.data.token}`, // Headers your auth endpoint needs
        //     Accept: 'application/json', // Headers your auth endpoint needs
        //     'Access-Control-Allow-Origin': '*',
        //     Origin: import.meta.env.VITE_URI,
        //   },
        // })
        // const beamsClient = new PusherPushNotifications.Client({
        //   instanceId: '140343aa-f173-4a2d-940a-7724c7c12be1',
        // })
        // beamsClient
        //   .start()
        //   .then(() => {
        //     beamsClient.setUserId(`"${response.data.user.id}"`, beamsTokenProvider)
        //     console.log('hello auth ')
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   })

        // this.userPermissions = response.data.user.permissions;
        //  window.location.href = 'https://canv.sa/web#cids=1&home='
        // this.router.push({ name: 'home' })
        document.cookie = ` XSRF-TOKEN=${response.data.result.session_info.map_box_token};laravel_session=${response.data.result.session_info.map_box_token} ; path=/; SameSite=Strict`;
        // window.location.href = 'https://canv.sa/web#cids=1&home='

      } else {

        error.value="Email or password Doesn't match our record"

        load.value=false
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
