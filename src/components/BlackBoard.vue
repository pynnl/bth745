<template>
  <div>
    <v-navigation-drawer
      clipped
      fixed
      dark
      stateless
      :width="93"
      :value="true"
      style="top: 50px; padding-top: 8px; background: #333"
    >
      <v-tabs vertical v-model="tab" slider-size="3" background-color="#333">
        <v-tab>Courses</v-tab>
        <v-divider></v-divider>
        <v-tab v-for="(e, i) in courses" :key="i">{{e.code}}</v-tab>
      </v-tabs>
    </v-navigation-drawer>

    <v-tabs-items v-model="tab" style="margin-left: 93px">
      <v-tab-item
        v-for="(e, i) in [{}, ...courses]"
        :key="i"
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        <Course v-if="e.code" :course="e"/>
        <TimeTable v-else/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TimeTable from './TimeTable'
import Course from './Course'
import courses from './courses'

export default {
  components: {
    TimeTable,
    Course
  },
  data: () => ({
    tab: null,
    courses
  })
}
</script>
