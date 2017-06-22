import {router} from '../index'

// endpoints
const API_URL = 'https://fmsdev-ap-southeast-2-sydney.tahnsoftware.net/fmi/rest/api/'
const LOGIN_URL = API_URL + 'auth/B00000'
const SIGNUP_URL = API_URL + 'users/'

export default {
	// user object is how we check auth status
	user: {
		authenticated: false
	},
  
	login(context, creds, redirect){
		context.$http.post(LOGIN_URL, creds, (data) => {
			localStorage.setItem('token', data.token)

			this.user.authenticated = true

			// redirect
			if(redirect){
				router.go(redirect)
			}
		}).error((err) => {
			context.error = err
		})
	},

	logout(){
		localStorage.removeItem('token')
		this.user.authenticated = false
	},

	checkAuth(){
		var jwt = localStorage.getItem('token')
		if(jwt){
			this.user.authenticated = true
		} else {
			this.user.authenticated = false
		}
	},

	getAuthHeader(){
		return {
			'FM-Data-token': localStorage.getItem('token')
		}
	}
}

