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

      <!-- toolbox -->
      <v-btn id="toolbox" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-menu activator="#toolbox" :close-on-content-click="false" offset-y>
        <v-card class="d-flex flex-wrap justify-space-around py-1" width="300">
          <v-btn v-for="e in tools" :key="e.label" :color="e.color" width="30%" height="80" text>
            <div>
              <v-icon>{{e.icon}}</v-icon>
              <div>{{e.label}}</div>
            </div>
          </v-btn>
        </v-card>
      </v-menu>

      <!-- login -->
      <v-btn color="primary" dark v-if="loggedin">Logout</v-btn>
      <v-dialog v-model="dialog" persistent max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-if="!loggedin">Login</v-btn>
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
    loggedin: false,
    dialog: false,
    tab: null,
    tools: [
      { icon: 'mdi-email', label: 'Email', color: 'red' },
      { icon: 'mdi-blogger', label: 'Blog', color: 'blue' },
      { icon: 'mdi-account-box', label: 'Contact', color: 'green' },
      { icon: 'mdi-calendar-clock', label: 'Calendar', color: 'blue' },
      { icon: 'mdi-account-multiple', label: 'Group', color: 'green' },
      { icon: 'mdi-calendar-check', label: 'Task', color: 'blue' },
      { icon: 'mdi-account-group', label: 'Classmates', color: 'red' }
    ]
  })
}
</script>
