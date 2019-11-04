<template>
  <v-app>
    <!-- app bar -->
    <v-app-bar style="box-shadow: 0 2px black" app clipped-left color="red accent-2">
      <v-tabs background-color="transparent" color="black" v-model="tab">
        <v-tab href="#home">
          <v-img :src="require('./assets/myseneca-white.png')" width="140px"></v-img>
        </v-tab>
        <v-tab href="#blackboard">BlackBoard</v-tab>
        <v-tab href="#students">Students</v-tab>
        <v-tab href="#research">Research</v-tab>
        <v-tab href="#system">System</v-tab>
      </v-tabs>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>

      <!-- toolbox -->
      <v-btn id="toolbox" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-menu activator="#toolbox" :close-on-content-click="false" offset-y>
        <v-card class="d-flex flex-wrap justify-space-around py-1" width="300">
          <v-btn
            v-for="e in tools"
            :key="e.label"
            :color="e.color"
            width="30%"
            height="80"
            text
          >
            <div>
              <v-icon>{{e.icon}}</v-icon>
              <div>{{e.label}}</div>
            </div>
          </v-btn>
        </v-card>
      </v-menu>

      <!-- login -->
      <!-- TODO: login button here -->
    </v-app-bar>

    <v-content>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="e in ['home', 'students', 'research', 'system']"
          :key="e"
          :value="e"
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
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
          <BlackBoard />
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script>
import BlackBoard from './components/BlackBoard'

export default {
  name: 'App',
  components: {
    BlackBoard
  },
  data: () => ({
    tab: null,
    tools: [
      { icon: 'mdi-email', label: 'Email', color: 'red' },
      { icon: 'mdi-blogger', label: 'TODO', color: 'blue' },
      { icon: 'mdi-account-box', label: 'TODO' },
      { icon: 'mdi-calendar-clock', label: 'TODO' },
      { icon: 'mdi-account-multiple', label: 'TODO' },
      { icon: 'mdi-calendar-check', label: 'TODO' },
      { icon: 'mdi-account-group', label: 'TODO' }
    ]
  })
}
</script>
