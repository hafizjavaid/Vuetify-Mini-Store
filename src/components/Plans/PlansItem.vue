<template>
  <v-col sm="6" md="4">
    <v-card>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="subheadline">
            {{ plan[0].title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row class="mt-1 mb-10" align="center">
          <v-col class="display-1"> {{ plan[0].price }} </v-col>
        </v-row>
      </v-card-text>

      <v-list class="transparent">
        <v-list-item v-for="item in plan[1]" :key="item.feature">
          <v-list-item-title>{{ item.feature }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-btn class="ma-10" width="180px" height="45px" @click="selectPlan(plan[0].title)" depressed dark>
        Select
      </v-btn>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: ["plan"],
  data() {
    return {};
  },
  methods:{
    selectPlan(title)
    {
      this.$emit('selectedPlan', title);
    }
  }
};
</script>