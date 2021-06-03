import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";

// theme: {
//   primary: "#007E8C",
//   secondary: "#FDDB27",
//   accent: "#FDDB27",
//   error: "#ED2B33",
//   info: "#17C39A",
//   success: "#17C39A",
//   warning: "ED2B33",
// },
Vue.use(Vuetify, {
  theme: {
    themes: {
      light: {
        primary: "#FDDB27",
        secondary: "#000000",
        success: "#41C3CF",
        error: "#FF2A00",
        info: "#242424",
      },
      dark: {
        primary: "#FDDB27",
        secondary: "#000000",
        success: "#41C3CF",
        error: "#FF2A00",
        info: "#242424",
      },
    },
  },
});

export default new Vuetify({});
