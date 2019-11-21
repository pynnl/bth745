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
      <v-menu id="asdf" style="top: 100px" activator="#toolbox" :close-on-content-click="false" left offset-y>
        <v-card
          class="d-flex flex-wrap justify-space-around py-1"
          width="250"
        >
          <v-btn @click="e.click && e.click()" v-for="e in tools" :key="e.label" :color="e.color + ' lighten-1'" width="30%" height="80" text>
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
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field label="Username"></v-text-field>
            <v-text-field label="Password" type="password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false; loggedin = true; loggedSnackbar = true">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <!-- route -->
    <v-content style="background: white">
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

      <!-- snackbars -->
      <v-snackbar :timeout="3000" color="success" v-model="loggedSnackbar">Logged in successful</v-snackbar>
      <v-snackbar :timeout="3000" color="success" v-model="emailSent">Email sent</v-snackbar>

      <!-- Email -->
      <v-dialog
        v-model="email"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card tile class="d-flex flex-column" style="height: 100vh">
          <div style="height: 48px">
            <v-toolbar dense dark color="primary">
              <v-btn icon dark @click="email = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Send email</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="email = false; emailSent = true">Send</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </div>

          <v-card tile style="padding: 20px 300px" class="flex-grow-1">
            <v-text-field class="px-8" label="To"></v-text-field>
            <v-text-field class="px-8" label="Cc"></v-text-field>
            <v-text-field class="px-8" label="Subject"></v-text-field>
            <div class="mb-6 px-8">
              <wysiwyg/>
            </div>
            <v-file-input class="pr-8" chips multiple label="Attached Files"></v-file-input>
          </v-card>
        </v-card>
      </v-dialog>
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
  data: vm => ({
    loggedin: false,
    loggedSnackbar: false,
    dialog: false,
    email: false,
    emailSent: false,
    tab: null,
    tools: [
      { icon: 'mdi-email', label: 'Email', color: 'red', click: () => vm.email = true },
      { icon: 'mdi-blogger', label: 'Blog', color: 'blue' },
      { icon: 'mdi-account-box', label: 'Contact', color: 'green' },
      { icon: 'mdi-calendar-clock', label: 'Calendar', color: 'teal' },
      { icon: 'mdi-account-multiple', label: 'Group', color: 'pink' },
      { icon: 'mdi-calendar-check', label: 'Task', color: 'purple' }
    ]
  })
}
</script>
