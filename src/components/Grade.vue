<template>
  <div>
    <v-simple-table
      :fixed-header="fixedHeader"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-right">Total</th>
            <th class="text-left">Out of</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-right">350</td>
            <td>/420</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table
      :fixed-header="fixedHeader"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Item</th>
            <th class="text-left">Grade</th>
            <th class="text-left">Out of</th>
            <th class="text-left">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in grades" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.grade }}</td>
            <td>/{{ item.gradeOutOf }}</td>
            <td>{{ item.weight }}%</td>
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
    grades: [
      {
        name: 'Assignment1',
        grade: 15,
        gradeOutOf: 15,
        weight: 2
      },
      {
        name: 'Quiz1',
        grade: 10,
        gradeOutOf: 15,
        weight: 15
      },
      {
        name: 'test1',
        grade: 35,
        gradeOutOf: 50,
        weight: 10
      },
      {
        name: 'test2',
        grade: 45,
        gradeOutOf: 55,
        weight: 10
      },
      {
        name: 'test3',
        grade: 26,
        gradeOutOf: 45,
        weight: 10
      },
      {
        name: 'test4',
        grade: 47,
        gradeOutOf: 55,
        weight: 10
      },
      {
        name: 'test5',
        grade: 40,
        gradeOutOf: 40,
        weight: 10
      }

    ]
  })
}
</script>
