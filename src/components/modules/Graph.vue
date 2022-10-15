<template>
  <v-card class="mx-auto text-center" height="300">
    <v-card-title>Sales Last 24h</v-card-title>
    <v-card-text>
      <v-sheet height="215" rounded="" color="grey lighten-5">
        <v-sparkline
          color="blue"
          :value="value"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> ${{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [349, 500, 675, 899, 1025, 1205, 2500, 3340, 4200, 5600, 7600],
  }),
};
</script>
