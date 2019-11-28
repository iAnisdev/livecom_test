<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  data: () => ({}),
  methods: {
    ...mapActions({
      getAccessToken: 'getAccessToken'
    })
  },
  mounted(){
    this.getAccessToken()
  }
}
</script>
