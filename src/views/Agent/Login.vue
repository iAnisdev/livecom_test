<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Agent Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                   <v-text-field
                    id="password"
                    v-model="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                 <div style="margin-top: 1vh">
                    <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                 </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-snackbar v-model="snackbar" :color="color" :timeout="timeout" top>
      {{errMsg}}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
var CryptoJS = require('crypto-js')
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      errMsg: '',
      snackbar: false,
      timeout: 2000,
      color: 'error'
    }
  },
  methods: {
    ...mapActions({
      agentLogin: 'agentLogin'
    }),
    login() {
      let that = this
      if(that.username.trim() == ''){
        that.errMsg = 'Username Required'
        that.snackbar = true
      }else if (that.password !== '1234') {
        that.errMsg = 'Invalid Password'
        that.snackbar = true
      } else {
        let data = {}
        that.agentLogin(data)
      }
    }
  }
}
</script>
