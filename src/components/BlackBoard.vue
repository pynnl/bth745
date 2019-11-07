<template>
  <div>
    <v-navigation-drawer
      clipped
      fixed
      dark
      :width="93"
      :value="true"
    >
      <v-divider class="mt-12"></v-divider>
      <v-tabs
        vertical
        v-model="tab"
        class="mt-6"
      >
        <v-tab href="#courses">Courses</v-tab>
        <v-divider></v-divider>
        <v-tab>BTH 745</v-tab>
        <v-tab>Course</v-tab>
        <v-tab>Course</v-tab>
        <v-tab>Course</v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <div style="margin-left: 100px">
      <v-tabs-items v-model="tab">
        <v-tab-item value="courses">
          <Courses/>
        </v-tab-item>
      </v-tabs-items>
    </div>

  </div>
</template>

<script>
import Courses from './Courses'

export default {
  components: {
    Courses
  },
  data: () => ({
    tab: null
  })
}
</script>
