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
      <!--<v-menu
        right
        top
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in ['Send Email' ]"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
      <v-menu bottom :offset-y="10" v-model="menu">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </template>

        <v-container fluid>
          <v-card>
          <v-row>
            <v-col cols="3" sm="5" offset-sm="4">
              <v-row>
                <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn large icon @click="() => {}">
                  <v-icon :color="yellow">mdi-blogger</v-icon>
                </v-btn>
                 <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                 <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                 <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn large icon @click="() => {}">
                  <v-icon>mdi-email</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
          </v-card>
        </v-container>
      </v-menu>
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
