<template>
  <div class="navbar">
    <v-app-bar app color="grey darken-4" dark class="px-1" elevation="0">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="SizeFox Logo"
            class="shrink mr-2"
            contain
            src="/logosizefox.png"
            transition="scale-transition"
            max-height="30"
            max-width="30"
          />
        </router-link>

        <!-- hyperlink format removed!
        -->

        <router-link style="text-decoration: none; color: inherit" to="/">
          <h3 class="pa-2">Size Fox</h3>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="goHome" text>
        <span class="mr-2 font-weight-bold">Dashboard</span>
      </v-btn>

      <v-btn @click="goIcons" text>
        <span class="mr-2 font-weight-bold">Icons</span>
      </v-btn>

      <v-btn @click="goPlans" text>
        <span class="mr-2 font-weight-bold">Plans</span>
      </v-btn>

      <v-btn @click="goHelp" text>
        <span class="mr-0 font-weight-bold">Help</span>
        <v-icon right dark medium> mdi-help-circle-outline </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    //
  }),
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goHelp() {
      this.$router.push({ name: "Help" });
    },
    goPlans() {
      this.$router.push({ name: "Plans" });
    },
    goIcons() {
      this.$router.push({ name: "Icons" });
    },
  },
};
</script>
