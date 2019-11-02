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
          <v-calendar
            type="week"
            :max-days="5"
          >
          </v-calendar>
        </v-tab-item>
      </v-tabs-items>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null
  })
}
</script>
