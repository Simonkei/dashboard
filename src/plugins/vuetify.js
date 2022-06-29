import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1e1e2d",
        secondary: "#1F3451",
        accent: "#6e82a5",
      },
    },
  },
});
