import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ffffff",
        secondary: "#E20426",
        accent: "#004C92",
        error: "#b71c1c", // pink 28963C orange E20426 green E20426
      },
    },
  },
});
