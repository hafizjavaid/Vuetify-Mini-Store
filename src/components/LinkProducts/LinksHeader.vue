<template>
  <v-row class="mt-10">
    <v-col md="10"> <h1 style="text-align: left">Link to Products</h1></v-col
    ><v-col md="2">
      <v-btn
        @click="goEditor"
        class="mx-2"
        width="180px"
        height="45px"
        depressed
        dark
      >
        Save and Return<v-icon dark right> mdi-content-save-outline </v-icon>
      </v-btn></v-col
    >
  </v-row>
</template>

<script>
export default {
  methods: {
    goEditor() {
      this.$router.push("/templates");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>