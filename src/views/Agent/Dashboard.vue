<template>
  <section>
  <h1>Dashboard View</h1>
<!-- 
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
    </v-snackbar> -->
  </section>
</template>

<script>
export default {}
</script>
