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
          v-for="(e, i) in menus"
          :key="i"
          @click="reset(i)">
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>{{e.label}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-tabs v-model="sub" vertical>
            <v-tab
              v-for="f in 4"
              :key="f"
              style="width: 256px; text-transform: none"
              @click="scrollTo(genID(course.code, e.label, f))"
            >
              {{e.label}} {{f}}
            </v-tab>
          </v-tabs>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-tabs-items
      v-model="menu"
      style="
        margin-left:256px;
        padding-top:80px;
        padding-bottom:200px"
    >
      <v-tab-item v-for="e in menus" :key="e.label">
        <v-card
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
          <v-card-subtitle> date</v-card-subtitle>
          <v-card-text>
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
export default {
  props: ['course'],
  data: () => ({
    tab: null,
    menu: 0,
    sub: 0,
    autoTrackScroll: false,
    menus: [
      {
        label: 'Announcement'
      },
      {
        label: 'Course Information'
      }
    ]
  }),
  computed: {
    path () {
      const path = []
      const menu = this.menus[this.menu]
      path.push(this.course.code, menu.label, `${menu.label} ${this.sub}`)
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
