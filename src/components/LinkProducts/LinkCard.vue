<template>
  <v-col>
    <v-card
      v-for="(link, i) in linkCards"
      :key="i"
      flat
      outlined
      class="my-5"
      min-height="200"
      style="
        display: flex;
        flex-direction: column;
        align-items: left;
        border-radius: 1px;
      "
    >
      <v-row>
        <v-col md="9">
          <h3 class="ma-5 py-0" style="text-align: left">
            {{ link.title }}
          </h3>
        </v-col>
        <v-col md="3">
          <v-btn class="ma-5 py0" width="200px" height="45px" depressed>
            Select {{ link.text }}<v-icon dark right> {{ link.icon }} </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      linkCards: [
        {
          title: " Display chart in the following products:",
          text: "products",
          icon: "mdi-plus-circle",
        },
        {
          title: "And, display chart in products within these collections:",
          text: "collections",
          icon: "mdi-plus-circle",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>