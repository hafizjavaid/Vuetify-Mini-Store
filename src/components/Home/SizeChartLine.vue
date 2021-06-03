<template>
  <div>
    <v-list shaped id="chart-list">
      <v-list-item-group color="primary">
        <v-list-item>
          <!-- Title -->
          <v-list-item-content>
            <v-list-item-title style="text-align: left">
              {{ sizeChart.title }}
            </v-list-item-title>
          </v-list-item-content>

          <!-- Switch Button -->
          <v-list-item-action>
            <v-switch
              flat
              :input-value="isChartPublished"
              color="rgb(23,195,154)"
              @click.stop="$store.commit('toggleSizeChartStatus', sizeChart.id)"
            >
            </v-switch>
          </v-list-item-action>
          <!-- Published / Unpublished -->
          <v-list-item-content class="ml-4">
            <v-list-item-title style="text-align: left">
              {{ sizeChart.published ? "Published" : "Unpublished" }}
            </v-list-item-title>
          </v-list-item-content>
          <!-- Menu Icon -->
          <v-list-item-action>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" depressed plain>
                  <v-icon color="black">mdi-menu</v-icon>
                </v-btn>
              </template>
              <v-list
                class="pa-0"
                style="text-decoration: none; color: inherit"
              >
                <v-list-item-group color="primary">
                  <router-link
                    style="text-decoration: none; color: inherit"
                    :to="{
                      name: 'Edit',
                      query: { source: 'chart', chart_id: sizeChart.id },
                    }"
                  >
                    <v-list-item>
                      <v-list-item-icon class="mr-2">
                        <v-icon>mdi-pencil</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title
                        text
                        uppercase
                        style="
                          text-decoration: none;
                          color: inherit;
                          text-transform: capitalize;
                        "
                        >Edit</v-list-item-title
                      >
                    </v-list-item>
                  </router-link>

                  <v-list-item @click="duplicateSizeChart(sizeChart.id)">
                    <v-list-item-icon>
                      <v-icon>mdi-content-copy</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Duplicate</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-hanger</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Products</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-eye</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Preview</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="deleteSizeChart(sizeChart.id)">
                    <v-list-item-icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["sizeChart"],
  computed: {
    isChartPublished() {
      return this.sizeChart.published;
    },
  },
  methods: {
    duplicateSizeChart(id) {
      this.$store.dispatch("duplicateSizeChart", id);
    },
    deleteSizeChart(id) {
      this.$store.dispatch("deleteSizeChart", id);
    },
  },
};
</script>
