<template>
  <div>
    <v-row>
      <v-col cols="12" lg="3" md="6" sm="6" xs="6">
        <v-text-field
          @keyup="$emit('search', enteredVal)"
          v-model="enteredVal"
          color="primary"
          outlined
          label="Search Employees"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredVal: "",
    };
  },
};
</script>
