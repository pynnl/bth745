<template>
  <div>
    <v-navigation-drawer
      clipped
      fixed
      stateless
      :value="true"
      style="left: 93px; top: 50px;"
    >
      <v-list>
        <v-list-group
          ref="menu"
          v-for="(e, i) in menus"
          :active-class="e.label !== 'Grade' && 'grey--text text--darken-2'"
          :key="i"
          :value="!i"
          :append-icon="e.label !== 'Grade' && '$expand'"
          @click="reset(i)"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>{{e.icon}}</v-icon>
                <span :class="'ml-3 subtitle-2 ' + ((e.label !== 'Grade' || menu !== i) && 'grey--text text--darken-2')">{{e.label}}</span>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-tabs v-if="e.label !== 'Grade'" v-model="sub" vertical slider-size="3">
            <v-tab
              v-for="f in 4"
              :key="f"
              class="body-2"
              style="
                width: 256px;
                text-transform: none;
                justify-content: start;
                padding-left: 52px"
              @click="scrollTo(genID(course.code, e.label, f))"
            >
              {{e.label}} {{f}}
            </v-tab>
          </v-tabs>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- content -->
    <v-tabs-items
      v-model="menu"
      style="
        margin-left:256px;
        padding-top:80px;
        padding-bottom:200px"
    >
      <v-tab-item v-for="e in menus" :key="e.label">
        <Grade v-if="e.label === 'Grade'"/>

        <v-card
          v-else
          v-for="f in 4"
          :key="f"
          outlined
          style="margin: 25px 100px"
        >
          <v-card-title
            :id="genID(course.code, e.label, f)"
            v-intersect="(...args) => onScroll(f - 1, args[2])"
          >
            {{e.label}} {{f}}
          </v-card-title>
          <!-- date -->
          <v-card-subtitle>{{date}}</v-card-subtitle>

          <!-- course document -->
          <template v-if="e.label === 'Course Document'">
            <v-card-text>
            <v-skeleton-loader :boilerplate="true" type="text@2, sentences"></v-skeleton-loader>
            </v-card-text>
            <v-divider></v-divider>
            <div class="d-flex">
              <v-card-subtitle style="width: 180px">Attached Files:</v-card-subtitle>
              <div class="py-3 flex-grow-1 d-flex flex-wrap">
                <div
                  v-for="e in 5"
                  :key="e"
                  class="d-flex align-center"
                  style="width: 33%"
                >
                  <v-skeleton-loader style="width: 100px" :boilerplate="true" type="text"></v-skeleton-loader>
                  <v-btn fab x-small icon>
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </template>

          <!-- others -->
          <v-card-text v-else>
            <v-skeleton-loader
              :boilerplate="true"
              type="text@3, sentences, text@2, sentences"
            ></v-skeleton-loader>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <div
      class="px-12 py-3"
      style="
        position: fixed;
        left: 349px;
        top: 50px; right: 0;
        background: white;
        border-bottom: 1px solid #e0e0e0"
    >
      <div class="headline font-weight-medium grey--text text--darken-3">{{course.name}}</div>
      <v-breadcrumbs class="caption grey--text pa-0" :items="path"></v-breadcrumbs>
    </div>
  </div>
</template>

<script>
import Grade from './Grade'
const date = new Date().toUTCString()

export default {
  components: { Grade },
  props: ['course'],
  data: () => ({
    date,
    menu: 0,
    sub: 0,
    autoTrackScroll: false,
    menus: [
      { label: 'Announcement', icon: 'mdi-bullhorn' },
      { label: 'Course Information', icon: 'mdi-information' },
      { label: 'Course Document', icon: 'mdi-file-document' },
      { label: 'Assignment', icon: 'mdi-square-edit-outline' },
      { label: 'Grade', icon: 'mdi-format-annotation-plus' }
    ]
  }),
  computed: {
    path () {
      const path = []
      const menu = this.menus[this.menu]
      path.push(this.course.code, menu.label)
      if (menu.label !== 'Grade') {
        path.push(`${menu.label} ${this.sub + 1}`)
      }
      return path.map(text => ({ text }))
    }
  },
  methods: {
    reset (i) {
      window.scrollTo(0, 0)
      this.sub = 0
      this.menu = i
      this.autoTrackScroll = false
      setTimeout(() => {
        this.sub = -1
        setTimeout(() => this.sub = 0)
      })
      setTimeout(() => this.autoTrackScroll = true, 500)
    },
    scrollTo (id) {
      this.$vuetify.goTo('#' + id, { offset: 100 })
      this.autoTrackScroll = false
      setTimeout(() => this.autoTrackScroll = true, 500)
    },
    onScroll (i, visible) {
      if (!this.autoTrackScroll) return
      if (visible && i < this.sub) {
        this.sub = i
      } else if (!visible && i === this.sub) {
        this.sub = i + 1
      }
    },
    genID: (...args) => args.map(e => String(e).replace(' ', '-')).join('')
  }
}
</script>
