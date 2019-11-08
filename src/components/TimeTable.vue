<template>
  <v-calendar class="time-table" style="padding: 20px 150px"
    type="week"
    :max-days="5"
    :weekdays=[1,2,3,4,5]
    :first-interval=8
    :interval-count=13
    :interval-height=40
    :events="courses"
    :now="today"
    :value="today"
    :event-color="getEventColor"
  >
  </v-calendar>
</template>

<style>
.v-event-timed-container {
  width: 100% !important;
}

.time-table ::-webkit-scrollbar {
  display: none;
}
</style>

<script>
import courses from './courses'

export default {
  data: () => ({
    today: '2019-01-08',
    courses,
    events: [
      {
        name: 'BTH 745',
        start: '2019-01-07 09:00',
        end: '2019-01-07 10:00'
      },
      {
        name: 'DPS 924',
        start: '2019-01-08 10:30',
        end: '2019-01-08 15:30'
      }
    ]
  }),
  methods: {
    getEventColor (event) {
      return event.color
    },
    intervalFormat (interval) {
      const longOptions = { timeZone: 'UTC', hour12: true, hour: '2-digit', minute: '2-digit' }
      return longOptions
    }
  }
}
</script>
