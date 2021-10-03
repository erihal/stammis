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
        success: "#5DA770",
        error: "#F67C40", // pink 28963C orange F67C40 green 5DA770
      },
    },
  },
});
