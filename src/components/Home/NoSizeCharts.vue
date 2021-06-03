<template>
  <div class="no-charts">
    <v-img
      src="/nocharts.svg"
      transition="scale-transition"
      max-height="300"
      max-width="300"
    />
    <v-icon size="100" color="primary">
      mdi-add-circle
    </v-icon>
    <v-btn
      @click="goNew"
      target="_blank"
      rounded
      color="rgb(253,219,39)"
      class="mt-16 px-10"
    >
      <span>Create your first chart</span>
      <v-icon right dark medium>
        mdi-arrow-right
      </v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
   methods: {
    goNew() {
      this.$router.push({ name: "Templates" });
    }
   }
};
</script>

<style lang="sass">
.no-charts
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
</style>
