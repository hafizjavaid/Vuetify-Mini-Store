<template>
  <div class="mt-10">
    <Header></Header>
    <v-list id="size-charts">
      <SizeChartLine
        v-for="SizeChart in $store.state.sizeCharts"
        :key="SizeChart.id"
        :sizeChart="SizeChart"
      />
    </v-list>
  </div>
</template>

<script>
import Header from "./ListSizeCharts/ListSizeChartsHeader";
export default {
  components: {
    SizeChartLine: require("./SizeChartLine.vue").default,
    Header,
  },
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