<template>
	<div class='col-sm-4 col-sm-offset-4'>
		<h2>Login</h2>
		<p>Log in to your account to get some great quotes.</p>		
		<div class="alert alert-danger" v-if="error">
	        <p>{{ error }}</p>
	    </div>
		<div class="form-group">
			<input
			  type="text"
			  class="form-control"
			  placeholder="Enter your username"
			  v-model="credentials.user">
		</div>
		<div class="form-group">
			<input
			  type="text"
			  class="form-control"
			  placeholder="Enter your password"
			  v-model="credentials.password">
		</div>
		<!-- @click is the same as v-on:click -->
		<button class="btn btn-primary" @click="submit()">Access</button>
	</div>
</template>

<script>
import auth from '../auth'
export default {
	data(){
		return {
			credentials: {
				user: 'alex@yourhostaddress.com',
				password: 'password'
			},
			error: ''
		}
	},
	methods: {
		submit(){
			var credentials = {
				user: this.credentials.username,
				password: this.credentials.password,
				layout: 'Empty'
			}

			auth.login(this, credentials, 'secretquote')
		}
	}
}
</script>











