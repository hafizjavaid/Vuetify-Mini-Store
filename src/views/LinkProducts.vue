<template>
  <v-container>
    <LinksHeader></LinksHeader>
    <v-row>
      <LinkCard></LinkCard>
    </v-row>
  </v-container>
</template>

<script>
import LinkCard from "@/components/LinkProducts/LinkCard.vue";
import LinksHeader from "@/components/LinkProducts/LinksHeader.vue";

export default {
  data() {
    return {
      radioGroup: 1,
      itemsBelongs: ["Product belongs to:", "Product does not belong to:"],
      itemsCluster: [
        "Products",
        "Collections",
        "Product types",
        "Product vendors",
        "Product tags",
        "All products",
      ],
      selectedCondition: "EN - Size guide",
    };
  },
  components: {
    LinkCard,
    LinksHeader,
  },
};
</script>

<style>
</style>