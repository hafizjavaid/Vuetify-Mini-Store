<template>
  <div class="home">
    <v-container>
      <ListSizeCharts v-if="$store.state.sizeCharts.length" />
      <NoSizeCharts v-else />
    </v-container>
    <!-- No Need In My Opinion -->
    <CreateChart v-if="$store.state.sizeCharts.length" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListSizeCharts from "@/components/Home/ListSizeCharts";
import SearchBar from "@/components/Home/SearchBar";
import NoSizeCharts from "@/components/Home/NoSizeCharts";
import CreateChart from "@/components/Home/CreateChart";

export default {
  name: "Home",
  components: {
    ListSizeCharts,
    SearchBar,
    CreateChart,
    NoSizeCharts,
  },
};
</script>

<style>
#size-charts .v-list-item__title {
  text-align: left;
}
#size-charts2 .v-list-item__title {
  text-align: left;
}

#size-charts2 .v-list-item__content {
  flex: 0 0 40%;
  max-width: 40%;
}
#tinymce.table_odd_stripes tr:nth-child(even) {
  background: #ccc !important;
}

#tinymce.table_odd_stripes tr:nth-child(odd) {
  background: #fff !important;
}

#myPreview .table_odd_stripes tr:nth-child(odd) {
  background: #f2f2f2 !important;
}
#myPreview .table_odd_stripes tr:nth-child(even) {
  background: #fff !important;
}
#myPreview .table_even_stripes tr:nth-child(even) {
  background: #f2f2f2 !important;
}
#myPreview .table_even_stripes tr:nth-child(odd) {
  background: #fff !important;
}
#myPreview .table_bottom_border {
  border-collapse: collapse;
  border: none !important;
}
#myPreview .table_bottom_border tr {
  border-bottom: 2px solid #cdd3d9;
}
#app {
  margin-top: 0px !important;
}

@media (max-width: 600px) {
  #chart-list .v-list-item {
    flex-direction: column !important;
    /* flex-wrap: wrap !important; */
  }
}
</style>