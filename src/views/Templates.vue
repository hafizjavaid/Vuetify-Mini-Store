<template>
  <div id="template_selector">
    <!-- Elena Methode 3 -->

    <v-container>
     <Tabs :tabs="tabs" :tabsItem="tabsItem"></Tabs>
      <IconsAuthor></IconsAuthor>
    </v-container>
  </div>
</template>

<script>
import IconsAuthor from "@/components/Templates/IconsAuthor";
import Tabs from "@/components/Templates/tabs";

export default {
  name: "TemplateSelector",
  components: {
    IconsAuthor,
    Tabs
  },
  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      tabs: ["Blank", "Woman", "Men", "Girl", "Boy", "Baby", "Pet", "Other"],
      tabsItem: [
        //  Blank Array
        [
          {
            title: "Blank",
            img: require("@/assets/table.svg"),
            button: "Select",
            chart_id: 11,
          },
        ],
        //  Women Array
        [
          {
            title: "Bikini",
            img: require("@/assets/035-brassiere.svg"),
            button: "Select",
            chart_id: 6,
          },
          {
            title: "Dress",
            img: require("@/assets/042-dress.svg"),
            button: "Select",
            chart_id: 7,
          },
          {
            title: "Bra",
            img: require("@/assets/035-brassiere.svg"),
            button: "Select",
            chart_id: 8,
          },
        ],
        //  Men Array
        [
          {
            title: "Tops",
            img: require("@/assets/001-shirt.svg"),
            button: "Select",
            chart_id: 1,
          },
        ],
        //  Girl Array
        [
          {
            title: "Tops",
            img: require("@/assets/001-shirt.svg"),
            button: "Select",
            chart_id: 1,
          },
        ],
        //  Boy Array
        [
          {
            title: "Bottoms",
            img: require("@/assets/017-pants.svg"),
            button: "Select",
            chart_id: 2,
          },
        ],
        //  Baby Array
        [
          {
            title: "Blazer",
            img: require("@/assets/009-cardigan.svg"),
            button: "Select",
            chart_id: 3,
          },
        ],
        //  Pet Array
        [
          {
            title: "Pet",
            img: require("@/assets/dog.svg"),
            button: "Select",
            chart_id: 10,
          },
        ],
        //  Other Array
        [
          {
            title: "Jacket",
            img: require("@/assets/001-shirt.svg"),
            button: "Select",
            chart_id: 4,
          },
          {
            title: "Brief",
            img: require("@/assets/017-pants.svg"),
            button: "Select",
            chart_id: 5,
          },

          {
            title: "Shoes",
            img: require("@/assets/027-shoes.svg"),
            button: "Select",
            chart_id: 9,
          },
        ],
      ],
    };
  },
  methods: {},
};
</script>

<style>

</style>