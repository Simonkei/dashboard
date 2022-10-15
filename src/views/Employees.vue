<template>
  <div class="ma-8">
    <p class="display-1 secondary--text mb-8">All Staff</p>
    <employee-search @search="searchEmployee" />
    <v-row>
      <employee-list
        v-for="employee in filteredEmployees"
        :key="employee.id"
        :employee="employee"
        @delete="deleteEmployee"
      />
      <v-col v-if="search === ''" cols="12" lg="6" md="6" sm="12">
        <create-employee @employee-data="addEmployee" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EmployeeList from "../components/employees/EmployeeList.vue";
import EmployeeSearch from "../components/employees/EmployeeSearch.vue";
import CreateEmployee from "../components/employees/CreateEmployee.vue";
export default {
  data() {
    return {
      search: "",
      employees: [
        {
          id: 0,
          name: "James Wagner",
          position: "IT-Supporter",
          email: "jwa@email.com",
          img: "https://images.generated.photos/P8QsrP_RYbhVJpLB1MuOjaXmTlkhgU57T0cbdyMgWUc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIyMDkwLmpwZw.jpg",
        },
        {
          id: 1,
          name: "Daniel Morris",
          position: "Mechanic",
          email: "dmo@email.com",
          img: "https://images.generated.photos/jenATIqSxTrXqhLu_SjUvnAeRKPHsFkUdhUTLbivHHo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg5MDQxLmpwZw.jpg",
        },
        {
          id: 2,
          name: "Cody Barnes",
          position: "Developer",
          email: "cba@email.com",
          img: "https://images.generated.photos/RJ4aTDsIG_OXxhReG3FAcjH02ao2n5CHT_yVjuYbBxc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njc3NzM2LmpwZw.jpg",
        },
        {
          id: 3,
          name: "Camilla Walker",
          position: "HR",
          email: "cwa@email.com",
          img: "https://images.generated.photos/43tCRL3c-GPyt-1iRVGvZL7LzhTKhJZD729BMS4luVk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDc2NzIwLmpwZw.jpg",
        },
        {
          id: 4,
          name: "Johnny Anderson",
          position: "Mechanic",
          email: "jan@email.com",
          img: "https://images.generated.photos/GmFIIsoxbfqhVGYKmjuJ5q3l-xb_GWhBeMjJfePc6bQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE4MjUwLmpwZw.jpg",
        },
        {
          id: 5,
          name: "Anna Perez",
          position: "Accountant",
          email: "ape@email.com",
          img: "https://images.generated.photos/czgUqpC_6Z3iIEAbh-PfZVVyPb71zAF5EvnejStG0Sw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQxNDI0LmpwZw.jpg",
        },
        {
          id: 6,
          name: "Jonathan Perkins",
          position: "Mechanic",
          email: "jpe@email.com",
          img: "https://images.generated.photos/k2HVBHseTancFUE6UPOzrDV4-rqBZxK_blFC0yAvfFE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg5MjMyLmpwZw.jpg",
        },
        {
          id: 7,
          name: "Edward Norman",
          position: "Technician",
          email: "eno@email.com",
          img: "https://images.generated.photos/ksjXtPAmiHxo2b8JojJDbNWp9azIfty7Fr-7TsuF6iM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzUxNjU5LmpwZw.jpg",
        },
      ],
    };
  },
  methods: {
    searchEmployee(val) {
      this.search = val;
    },
    addEmployee(obj) {
      this.employees.push(obj);
      this.newId;
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter((employee) => employee.id !== id);
      console.log(id);
    },
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  components: {
    EmployeeList,
    EmployeeSearch,
    CreateEmployee,
  },
};
</script>
