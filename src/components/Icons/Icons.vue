<template>
  <v-main>
    <v-container>
      <v-row class="my-5">
        <v-col cols="12" sm="12">
          <h1 left class="text-left">Icons</h1>
        </v-col>
      </v-row>
      <v-row class="my-5">
        <v-col sm="12">
          <h4 style="color: #41c3cf" class="text-left font-weight-thin">
            In this page, you can select the text and icons that will appear in
            your store
          </h4>
        </v-col>
      </v-row>
      <v-divider class="my-8"></v-divider>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            :rules="rules"
            hide-details="auto"
            placeholder="Size Chart"
            @keydown.native="autoSave"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/ruler.png"></v-img>

              <v-card-text>
                <div>Ruler</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/meter.png"></v-img>

              <v-card-text>
                <div>Meter</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/setsquare.png"></v-img>

              <v-card-text>
                <div>Set Square</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-8"></v-divider>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            :rules="rules"
            hide-details="auto"
            placeholder="Composition & Care"
            @keydown.native="autoSave"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/wash.png"></v-img>

              <v-card-text>
                <div>Wash</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/leaf.png"></v-img>

              <v-card-text>
                <div>Leaf</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card :loading="loading" class="mx-auto my-12" max-width="150">
              <v-img height="100" src="/cloud.png"></v-img>

              <v-card-text>
                <div>Cotton</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length <= 16) || "Max 16 characters",
      ],
    };
  },
};
</script>

<style>
</style>