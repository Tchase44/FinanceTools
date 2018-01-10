<template>
  <div class="1-auth-container">
      <div class="1auth login">
          <v-form v-model="validLogin">
            <v-text-field label="Username"
                          v-model="credentials.username"
                          prepend-icon="account_box"
                          :rules="rules"
                          required
                          color="light-blue lighten-1">
            </v-text-field>

            <v-text-field label="Password"
                          v-model="credentials.password"
                          prepend-icon="lock"
                          :rules="rules"
                          :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="()=>(loginPasswordVisible = !loginPasswordVisible)"
                          :type="loginPasswordVisible ? 'text' : 'password'"
                          required
                          color="light-blue lighten-1">
            </v-text-field>
            <v-btn flat
                   color="light-blue lighten-1"
                   @click="signUpVisible = true">
                Create Account
            </v-btn>
            <v-btn color="light-blue lighten-1"
                   @click="submitAuthentication()">
                login
            </v-btn>
          </v-form>
      </div>
      <div class="1-signup signUp" v-if="signUpVisible">
          <v-form v-model="validSignUp">
              <v-text-field label="Username"
                          v-model="newUser.username"
                          prepend-icon="account_box"
                          :rules="rules"
                          required
                          color="light-blue lighten-1">
            </v-text-field>
            <v-text-field label="Password"
                          v-model="newUser.password"
                          prepend-icon="lock"
                          :rules="rules"
                          :append-icon="signUpPasswordVisible ? 'visibility' : 'visibility_off'"
                          :append-icon-cb="()=>(signUpPasswordVisible = !signUpPasswordVisible)"
                          :type="signUpPasswordVisible ? 'text' : 'password'"
                          required
                          color="light-blue lighten-1">
            </v-text-field>
            <v-btn block
                   color="light-blue lighten-1"
                   @click="submitSignUp()">
                Sign Up
            </v-btn>
          </v-form>
      </div>
      <v-snackbar bottom="bottom"
                  color="red lighten-1"
                  v-model="snackbar">
          {{message}}
      </v-snackbar>
    </div>
</template>
<script>
import Authentication from '@/components/pages/Authentication'
export default {
    data(){
        return {
            snackbar: false,
            validLogin: false,
            loginVisible: false,
            loginPasswordVisible: false,
            validSignUp: false,
            signUpVisible: false,
            signUpPasswordVisible: false,
            rules: [(value)=> !!value || 'This Field is Required'],
            credentials: {
                username: '',
                password: ''
            },
            newUser:{
                username: '',
                password: ''
            },
            message : ''
        }
    },
    methods:{
        submitAuthentication(){
            Authentication.authenticate(this,this.credentials,'/')
        },
        submitSignUp(){
            Authentication.signup(this,this.newUser, '/')
        }
    }
}
</script>
<style lang="scss">
@import "./../../../assets/styles";
    .login {
        background: #444555;
        padding: 15px;
        margin:30px auto;
        min-width: 270px;
        max-width: 320px;
        animation: bounceIn 1s foward ease;
    }
    .signUp {
        background: #444555;
        padding: 15px;
        margin:30px auto;
        min-width: 270px;
        max-width: 320px;
        animation: slideInFromLeft 1s foward ease;
    }
</style>
