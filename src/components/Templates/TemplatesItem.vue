<template>

      <v-col sm="4" md="3">
        <v-card
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
          "
        >
          <v-card-title>{{ card.title }}</v-card-title>

          <v-img
            height="100"
            max-height="50"
            max-width="50"
            :src="card.img"
          ></v-img>

          <v-card-actions>
            <router-link
              style="text-decoration: none; color: inherit"
              :to="{
                name: 'Edit',
                query: {
                  source: 'template',
                  chart_id: card.chart_id,
                },
              }"
            >
              <v-btn
                color="#70D0CC"
                depressed
                style="margin: 20px; padding: 0 20"
              >
                {{ card.button }}
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>

</template>

<script>
import IconsAuthor from "./IconsAuthor";

export default {
  name: "TemplatesItem",
  props:['card'],
  data() {
    return {
    };
  },
  methods: {},
  components: {
    IconsAuthor,
  },
};
</script>