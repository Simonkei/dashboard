<template>
  <div>
    <v-card height="300">
      <v-card-title> Productivity </v-card-title>
      <v-card-text>
        <v-row class="text-center">
          <v-col>
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="20"
              :value="val"
              color="blue"
              class="font-weight-bold headline"
            >
              {{ val }} %
            </v-progress-circular>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col>
            <span> This week you have increased your productivity.</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 74,
    };
  },
};
</script>
