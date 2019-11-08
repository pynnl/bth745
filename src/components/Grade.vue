<template>
  <div>
    <v-simple-table
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Item</th>
            <th class="text-left">Grade</th>
            <th class="text-left">out of</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.grade }}</td>
            <td>{{ item.gradeOutOf }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</div>
</template>
<script>
export default {
  data: () => ({
    fixedHeader: false,
    height: 300,
    desserts: [
      {
        name: 'Assignment1',
        grade: 15,
        gradeOutOf: 15
      },
      {
        name: 'Quiz1',
        grade: 10,
        gradeOutOf: 15
      },
      {
        name: 'test1',
        grade: 35,
        gradeOutOf: 50
      }
    ]
  })
}
</script>
