<template>
  <v-app id="inspire">
    <v-content v-if="!isUserName">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="warning" dark flat>
                <v-toolbar-title>Start Chat</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="name"
                    v-model="nickname"
                    label="Username"
                    name="username"
                    type="text"
                  />
                  <v-textarea clearable label="Enter your Message" v-model="newmessage"></v-textarea>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="warning" block @click="startChat">Start Chat</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-content class="chatView" v-if="isUserName">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="success" dark flat>
                <v-toolbar-title>{{nickname}}</v-toolbar-title>
                <v-spacer />
                <v-btn color="error" @click="closeChat">X</v-btn>
              </v-toolbar>
              <v-card-text class="chatBox" id="chatBox">
                <div v-for="(message , i) in userMessages" :key="i">
                  <div class="AgenMessage" v-if="!message.isUser">
                    <v-alert width="70%" elevation="2">
                      {{message.content}}
                      <div class="time">
                        <p>{{message.created_time | moment("DD/MM/YYYY, hh:mm:ss a")}}</p>
                      </div>
                    </v-alert>
                  </div>
                  <div class="userMessage" v-if="message.isUser">
                    <v-alert width="70%" color="info" elevation="2">
                      <p>{{message.content}}</p>
                      <div class="time">
                        <p
                          class="whiteColor"
                        >{{message.created_time | moment("DD/MM/YYYY, hh:mm:ss a")}}</p>
                      </div>
                    </v-alert>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-text-field v-model="message" clearable label="Message" style="width: 100%">
                  <template v-slot:append>
                    <v-fade-transition leave-absolute>
                      <v-btn color="warning" @click="sendMessage">Send Now</v-btn>
                    </v-fade-transition>
                  </template>
                </v-text-field>
                <v-spacer />
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
export default {
  name: 'login',
  data() {
    return {
      isUserName: false,
      nickname: '',
      newmessage: '',
      message: '',
      snackbar: false,
      timeout: 2000,
      color: 'error',
      errMsg: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      userMessages: 'getUserMessages'
    })
  },
  methods: {
    ...mapActions({
      createUser: 'createUser',
      sendUserMessage: 'sendUserMessage'
    }),
    startChat() {
      let that = this
      if (that.nickname == '') {
        // alert('password required')
        that.errMsg = 'Username Required'
        that.snackbar = true
      } else if (that.newmessage == '') {
        // alert('password required')
        that.errMsg = 'Message Required'
        that.snackbar = true
      } else {
        let data = {
          acc_openid: 'philipsvideochat_2',
          nickname: that.nickname
        }
        that
          .createUser(data)
          .then(res => {
            let smsData = {
              touser: 'philipsvideochat_2',
              fromuser: res.id,
              msgtype: 'text',
              content: that.newmessage,
              isUser: true,
              created_time: Date.now()
            }
            that.isUserName = true
            return that.sendUserMessage(smsData)
          })
          .then(res => {
            // console.log('message response ', res)
          })
          .catch(err => {
            console.log('err ', err)
          })
      }
    },
    closeChat() {
      let that = this
      that.isUserName = false
      that.nickname = ''
      that.newmessage = ''
    },
    sendMessage() {
      let that = this
      if (that.message.trim() == '') {
        that.errMsg = 'Message Required'
        that.snackbar = true
      } else {
        let message = {
          touser: 'philipsvideochat_2',
          fromuser: that.user.id,
          msgtype: 'text',
          content: that.message,
          isUser: false,
          created_time: Date.now()
        }
        that.$store.commit('UPDATE_CHAT_MESSAGES', message)
        that.message = ''
        that.updateScroll()
      }
    },
    updateScroll() {
      var element = document.getElementById('chatBox')
      element.scrollTop = element.scrollHeight
    }
  }
}
</script>

<style  scoped>
.chatView {
  height: 100vh;
  width: 100vw;
  background-color: #0a7e8c;
}
.chatBox {
  width: 100%;
  height: 60vh;
  overflow-x: scroll;
  background-color: white;
}
.time {
  margin-top: 1vh;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 17px;
  color: rgba(0, 0, 0, 1);
  opacity: 0.32;
}
.AgenMessage {
  width: 100%;
}
.userMessage {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.userMessage p {
  color: white;
}
</style>
