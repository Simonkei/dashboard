<template>
  <div>
    <v-card>
      <v-card-title> Active Jobs </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="cars"
          hide-default-footer
          class="font-weight-bold"
          @click:row="clickedRow"
          item-key="name"
        >
          <template v-slot:item="{ item }">
            <tr class="white">
              <td>
                {{ item.name }}
              </td>
              <td>
                <v-btn
                  :color="item.status === 'Available' ? 'green' : 'red'"
                  style="text-transform: none"
                  outlined
                >
                  <v-badge
                    class="mr-2"
                    :color="item.status === 'Available' ? 'green' : 'red'"
                    inline
                    dot
                  ></v-badge
                  >{{ item.status }}
                </v-btn>
              </td>
              <td>
                {{ item.date }}
              </td>
              <td>
                {{ item.name }}
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Project",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Status", value: "status" },
        { text: "Date", value: "date" },
        { text: "Date", value: "date" },
      ],
      cars: [
        {
          name: "Volkswagen Polo",
          status: "Available",
          date: "12-08-22",
          color: "Blue",
        },
        {
          name: "Audi s3",
          status: "Waiting for parts",
          date: "12-08-22",
          color: "White",
        },
        {
          name: "Toyota Rav4",
          status: "Waiting for parts",
          date: "11-08-22",
          color: "Black",
        },
        {
          name: "BMW 420d",
          status: "Available",
          date: "11-08-22",
          color: "Grey",
        },
        {
          name: "Kia Ceed",
          status: "Available",
          date: "10-08-22",
          color: "Red",
        },
      ],
    };
  },
  methods: {
    clickedRow(i) {
      this.$emit("car", this.cars[i]);
      console.log(this.car[i]);
    },
  },
};
</script>
