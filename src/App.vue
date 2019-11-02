<template>
  <v-app>
    <!-- app bar -->
    <v-app-bar
      style="box-shadow: 0 2px black"
      app
      clipped-left
      color="red accent-2">
      <v-tabs
        background-color="transparent"
        color="black"
        v-model="tab">
        <v-tab href="#home">
          <v-img
            :src="require('./assets/myseneca-white.png')"
            width="140px"
            ></v-img>
        </v-tab>
        <v-tab href="#blackboard">BlackBoard</v-tab>
        <v-tab href="#students">Students</v-tab>
        <v-tab href="#research">Research</v-tab>
        <v-tab href="#system">System</v-tab>
      </v-tabs>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="e in ['home', 'students', 'research', 'system']"
          :key="e"
          :value="e"
          transition="fade-transition"
          reverse-transition="fade-transition">
          <v-img
            :src="require('./assets/' + e + '.png')"
            style="filter: blur(1px)"
            :transition="false"
          ></v-img>
        </v-tab-item>
        <v-tab-item
          value="blackboard"
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
          <BlackBoard/>
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import AppBar from './components/AppBar'
import BlackBoard from './components/BlackBoard'

export default {
  name: 'App',
  components: {
    BlackBoard
    // HelloWorld,
    // AppBar
  },
  data: () => ({
    tab: null
  })
}
</script>
