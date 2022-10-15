<template>
  <div>
    <v-card height="368">
      <v-card-title>{{ car.name }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col>Vehicle color: Blue</v-col>
            </v-row>
            <v-row>
              <v-col> Job Number: 2400</v-col>
            </v-row>
            <v-row>
              <v-col> Costumer: Peter davis</v-col>
            </v-row>
          </v-col>
          <v-col cols="6"> </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['car']
};
</script>
