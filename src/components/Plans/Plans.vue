<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" sm="6">
        <h1 left class="text-left">Plans</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <h4 left class="text-left">
          Your current plan is: <span style="color: #ff2a00">{{currentPlan}}</span>
        </h4>
      </v-col>
    </v-row>
    <v-row justify-md="center">
      <plans-item v-for="(plan, i) in plans" :key="i" @selectedPlan="selectedPlan" :plan="plan">
      </plans-item>
    </v-row>
  </v-container>
</template>
<script>
import PlansItem from "./PlansItem.vue";
export default {
  data() {
    return {
      plans: [
        [
          {
            title: "Free Plan",
            price: "Free",
          },
          [
            {
              feature: "3 published size charts",
            },
            {
              feature: "3 published composition & care cards",
            },
            {
              feature: "Limited support",
            },
            {
              feature: "Full style customization",
            },
            {
              feature: "Responsive size charts",
            },
          ],
        ],
        [
          {
            title: "Basic Plan",
            price: "$4/month",
          },
          [
            {
              feature: "Unlimited number of size charts",
            },
            {
              feature: "3 published composition & care cards",
            },
            {
              feature: "Full support",
            },
            {
              feature: "Full style customization",
            },
            {
              feature: "Responsive size charts",
            },
          ],
        ],
        [
          {
            title: "Premium Plan",
            price: "$6/month",
          },
          [
            {
              feature: "Unlimited number of size charts",
            },
            {
              feature: "Unlimited composition & care cards",
            },
            {
              feature: "Full support",
            },
            {
              feature: "Full style customization",
            },
            {
              feature: "Responsive size charts",
            },
          ],
        ],
      ],
      currentPlan:'Free Plan',
    };
  },
  components: {
    PlansItem,
  },
  methods:{
    selectedPlan(title){
      this.currentPlan = title;
    }
  }
};
</script>