<template>
  <v-tabs class="mt-10" center>
    <v-tab v-for="(tab, i) in tabs" :key="i">{{ tab }}</v-tab>

    <v-tab-item v-for="(tabItem, k) in tabsItem" :key="k">
      <v-row>
        <TemplatesItem
          sm="4"
          md="3"
          v-for="(card, n) in tabItem"
          :key="n"
          :card="card"
        >
        </TemplatesItem>
      </v-row>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import TemplatesItem from "./TemplatesItem";

export default {
  props: ["tabs", "tabsItem"],
  components: {
    TemplatesItem,
  },
};
</script>

<style>
.v-tabs-items {
  padding: 20px;
  margin-top: 20px;
}
.v-slide-group__content {
  /* margin: 0 10px; */
  justify-content: center;
}
.v-tab {
  max-width: 90px;
  width: 100%;
}
.theme--light.v-tabs > .v-tabs-bar {
  background-color: #f9f9f9;
}
.v-tab--active {
  background-color: #41c3cf;
  color: #fff !important;
}
.v-tabs-bar .v-tab::before {
  display: none;
}
.v-tabs-slider {
  display: none !important;
}
@media (max-width: 900px) {
  .v-tabs-bar {
    height: auto !important;
  }
  .v-slide-group__content {
    flex-direction: column;
    /* flex-wrap: wrap !important; */
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  .v-tab {
    height: 44px;
    max-width: 120px !important;
    width: 100%;
  }
  .theme--light.v-tabs > .v-tabs-bar {
  background-color: #f9f9f9;
  padding: 10px 0;
}
}
@media (max-width: 500px){
   .v-slide-group__content{
      grid-template-columns: 1fr;
   }
   .v-tab{
       max-width: 100% !important;
   }
    .theme--light.v-tabs > .v-tabs-bar {
  background-color: #f9f9f9;
  padding: 0;
}
}
</style>