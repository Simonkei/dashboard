<template>
  <v-col cols="12" lg="6" md="6" sm="12">
    <v-card height="220px">
      <v-card-text>
        <v-row>
          <v-col xl="3" lg="4" md="4" sm="3" xs="1">
            <v-avatar size="130px">
              <v-img :src="employee.img"></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <span class="title secondary--text font-weight-bold">{{
              employee.name
            }}</span>
            <br />
            <span>{{ employee.position }}</span>
            <p class="blue--text">{{ employee.email }}</p>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn @click="$emit('delete', employee.id)" color="red" icon
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="ml-2">
        <v-icon color="blue" large class="mx-4">mdi-twitter</v-icon>
        <v-icon color="blue" large>mdi-linkedin</v-icon>
        <v-spacer></v-spacer>
        <v-btn
          class="secondary--text"
          style="text-transform: none"
          color="white"
          >View profile</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["employee"],
};
</script>

<style scoped></style>
