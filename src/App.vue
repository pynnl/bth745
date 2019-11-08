<template>
  <v-app>
    <!-- app bar -->
    <v-app-bar app clipped-left dense style="box-shadow: 0 2px #333" color="red accent-2">
      <v-tabs background-color="transparent" color="#333" v-model="tab" slider-size="3">
        <v-tab>
          <v-img :src="require('./assets/myseneca-white.png')" width="140px"></v-img>
        </v-tab>
        <v-tab>BlackBoard</v-tab>
        <v-tab>Students</v-tab>
        <v-tab>Research</v-tab>
        <v-tab>System</v-tab>
      </v-tabs>

      <!-- toolbox -->
      <v-btn class="ma-3" small fab id="toolbox" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-menu id="asdf" style="top: 100px" activator="#toolbox" :close-on-content-click="false" offset-y>
        <v-card
          class="d-flex flex-wrap justify-space-around py-1"
          width="250"
        >
          <v-btn v-for="e in tools" :key="e.label" :color="e.color" width="30%" height="80" text>
            <div>
              <v-icon>{{e.icon}}</v-icon>
              <div class="caption">{{e.label}}</div>
            </div>
          </v-btn>
        </v-card>
      </v-menu>

      <!-- login -->
      <v-btn elevation="0" color="primary" dark v-if="loggedin">Logout</v-btn>
      <v-dialog v-model="dialog" persistent max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn elevation="0" color="primary" dark v-on="on" v-if="!loggedin">Login</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span style="" class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username" required></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false; loggedin = true">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-app-bar>

    <!-- route -->
    <v-content>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="e in ['home', null, 'students', 'research', 'system']"
          :key="e"
          transition="fade-transition"
          reverse-transition="fade-transition"
        >
          <v-img
            v-if="e"
            :src="require('./assets/' + e + '.png')"
            style="filter: blur(1px)"
          ></v-img>
          <BlackBoard v-else/>
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
    loggedin: false,
    dialog: false,
    tab: null,
    tools: [
      { icon: 'mdi-email', label: 'Email', color: 'red' },
      { icon: 'mdi-blogger', label: 'Blog', color: 'blue' },
      { icon: 'mdi-account-box', label: 'Contact', color: 'green' },
      { icon: 'mdi-calendar-clock', label: 'Calendar', color: 'blue' },
      { icon: 'mdi-account-multiple', label: 'Group', color: 'green' },
      { icon: 'mdi-calendar-check', label: 'Task', color: 'blue' }
    ]
  })
}
</script>
