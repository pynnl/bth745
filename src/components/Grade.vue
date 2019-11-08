<template>
  <div style="padding-top: 50px; margin: 0 20px">
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
          <tr style="background: #ccc; font-weight: bold">
            <td>Total</td>
            <td>350</td>
            <td>/420</td>
            <td>92%</td>
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
        name: 'Assignment 1',
        grade: 15,
        gradeOutOf: 15,
        weight: 2
      },
      {
        name: 'Quiz 1',
        grade: 10,
        gradeOutOf: 15,
        weight: 15
      },
      {
        name: 'Test 1',
        grade: 35,
        gradeOutOf: 50,
        weight: 10
      },
      {
        name: 'Test 2',
        grade: 45,
        gradeOutOf: 55,
        weight: 10
      },
      {
        name: 'Test 3',
        grade: 26,
        gradeOutOf: 45,
        weight: 10
      },
      {
        name: 'Test 4',
        grade: 47,
        gradeOutOf: 55,
        weight: 10
      },
      {
        name: 'Test 5',
        grade: 40,
        gradeOutOf: 40,
        weight: 10
      }

    ]
  })
}
</script>
