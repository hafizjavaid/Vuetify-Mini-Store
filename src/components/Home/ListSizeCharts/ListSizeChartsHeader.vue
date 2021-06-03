<template>
  <v-row class="mb-16">
    <v-col cols="12" sm="6">
      <h1 left class="text-left">My size charts</h1>
    </v-col>
    <v-col cols="12" sm="6" class="newChart">
      <v-btn
        @click="goNew"
        class="mx-2 my-2"
        width="160px"
        height="45px"
        depressed
        dark
        color="#000000"
      >
        New Size Chart
        <v-icon right dark medium> mdi-arrow-right </v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    goNew() {
      this.$router.push({ name: "Templates" });
    },
  },
};
</script>

<style scoped>
.newChart {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media (max-width: 600px) {
  .newChart {
    justify-content: flex-start;
    margin-bottom: 20px;
  }
}
</style>