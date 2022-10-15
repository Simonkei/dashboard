<template>
  <div>
    <v-navigation-drawer width="300px" dark color="primary" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Workshop </v-list-item-title>
          <v-list-item-subtitle> Manager </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          :to="item.route"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="my-6"></v-divider>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "Employees", icon: "mdi-account", route: "/employees" },
        { title: "Calendar", icon: "mdi-calendar", route: "/calendar" },
        { title: "Settings", icon: "mdi-cog", route: "/settings" },
      ],
      right: null,
    };
  },
};
</script>
