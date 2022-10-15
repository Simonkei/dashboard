<template>
  <div class="ma-4">
    <v-row>
      <v-col cols="3">
        <Productivity />
      </v-col>
      <v-col cols="6">
        <Graph />
      </v-col>
      <v-col cols="3">
        <Notes />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <car-table @car="car" />
      </v-col>
      <v-col>
        <car-information :car="carData" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Notes from "../components/modules/Notes.vue";
import Graph from "../components/modules/Graph";
import CarTable from "../components/modules/CarTable.vue";
import Productivity from "../components/modules/Productivity.vue";
import CarInformation from "../components/modules/CarInformation.vue";

export default {
  data() {
    return {
      carData: "",
    };
  },
  components: {
    Productivity,
    CarTable,
    Graph,
    Notes,
    CarInformation,
  },
  methods: {
    car(data) {
      this.carData = data;
      console.log(data);
    },
  },
};
</script>
