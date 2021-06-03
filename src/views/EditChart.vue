<template>
  <div id="editor">
    <v-container>
      <!-- Top Title Field With Buttons -->
      <v-row>
        <v-col cols="12" sm="8">
          <h1 left class="text-left">Size chart</h1>
        </v-col>
        <v-col cols="12" sm="4" class="newChart">
          <v-btn
            @click="goLink"
            width="160px"
            height="45px"
            outlined
            color="#FF2A00"
          >
            Link to Prods<v-icon dark right> mdi-hanger </v-icon>
          </v-btn>

          <v-btn
            @click="saveChart"
            class="mx-2 my-2"
            width="160px"
            height="45px"
            depressed
            dark
            color="#000000"
          >
            Done<v-icon dark right> mdi-check </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <h3 class="mb-0 py-0" style="text-align: left">Select chart name</h3>
          <v-text-field
            :rules="rules"
            hide-details="auto"
            v-model="currentChart.title"
            @keydown.native="autoSave"
          >
          </v-text-field>
          <v-row class="my-4 ml-0">
            <v-tooltip right color="error">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mt-2"
                  v-bind="attrs"
                  v-on="on"
                  dense
                  color="#242424"
                >
                  mdi-information-outline
                </v-icon>
              </template>
              <span color="secondary"
                >This name will not be visible to your clients</span
              >
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>

      <v-fade-transition>
        <v-row :class="[savingChanges ? 'showClass' : 'notShow']">
          <v-col cols="12" md="6" class="text-left">
            <h5 style="color: #41c3cf">Saving Changes...</h5>
          </v-col>
        </v-row>
      </v-fade-transition>
      <!-- Edit Content With Two Buttons -->
      <v-row class="mt-4 mb-1 py-0">
        <v-col cols="12" md="8" style="display: flex; align-items: center">
          <h3 style="text-align: left">Edit Content</h3>
        </v-col>
        <v-col cols="12" md="4" style="align-items: right">
          <v-btn
            href="https://conversionfox.io/inspiration-library/"
            target="_blank"
            style="background: none; text-align: right"
            rounded
            depressed
            height="45px"
            >Inspiration library<v-icon color="red" right> mdi-heart </v-icon>
          </v-btn>
          <v-btn
            style="background: none; text-align: right"
            rounded
            depressed
            height="45px"
            >Clear canvas<v-icon error color="error" right> mdi-broom </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Editor -->
      <v-row>
        <v-col cols="12">
          <editor
            api-key="rgzewf8bpj47rk4q9ygpl0bcuyaabatbmp3jxz580wge3228"
            :init="initValues"
            v-model="currentChart.content"
          ></editor>
        </v-col>
      </v-row>

      <!-- Editor Preview -->
      <v-layout class="my-5">
        <h3>Preview content</h3>
      </v-layout>
      <v-card style="margin-top: 20px; text-align: left">
        <div class="pa-4" v-html="currentChart.content" style="">
          {{ currentChart.content }}
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "Editor",
  components: {
    editor: Editor,
  },
  data() {
    return {
      items: [
        "EN - Size guide",
        "ES - Guia de tallas",
        "FR - Guide de tailles",
        "PT - Guia de tamanhos",
        "IT - Guida alle taglie",
        "DE - Grössentabelle",
      ],
      selectedIcon: "EN - Size guide",
      show: true,
      savingChanges: false,
      content1: "<h1>Design</h1>",
      content2: "<p>this is paragraph</p>",
      valid: true,
      name: "",
      output: "",
      initValues: {
        height: 500,
        menubar: false,
        statusbar: false,
        visual: false,
        visual_table_class: "my-custom-class",
        table_column_resizing: "resizetable",
        init_instance_callback: (editor) => {
          editor.on("keydown", () => {
            this.closeSaving();
          });
        },

        plugins: [
          "preview",
          "table",
          "fontselect",
          "image imagetools",
          "hr",
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "preview | undo redo| table | image | hr |fontselect | fontsizeselect |forecolor | bold italic | \
          alignleft aligncenter alignright alignjustify oudent indent ",
        imagetools_toolbar:
          "rotateleft rotateright | flipv fliph | editimage imageoptions",
        font_formats:
          "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
        fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",

        /*       table_class_list: [
          { title: "None", value: "" },
          { title: "Border top", value: "BorderTop" },
          { title: "Border bottom", value: "BorderBottom" },
          { title: "Border right", value: "BorderRight" },
          { title: "Border left", value: "BorderLeft" },
        ], */

        /*    table_row_class_list: [
          { title: "None", value: "" },
          { title: "Border Bottom", value: "bttm-border" },
        ],
        content_style: `
  					tr.bttm-border {
              
                           border-style : hidden!important;
                           border-bottom: 5px solid black;

          }`, */

        table_default_attributes: {
          border: "1",
        },
        table_default_styles: {
          width: "80%",
          margin: "auto",
        },

        table_class_list: [
          { title: "None", value: "" },
          { title: "Border Bottom", value: "bttm-border" },
        ],
        content_style: `
  					table.bttm-border td {
              border-right : hidden!important;
              border-left : hidden!important;                                       
          }, 
          `,
      },

      visual: false,

      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      currentChart: {},
      interval: null,
    };
  },
  methods: {
    goLink() {
      this.$router.push({ name: "LinkProducts" });
    },
    saveChart() {
      this.currentChart.published = false;
      this.$store.dispatch("EditChart", this.currentChart);
      console.log(this.currentChart);
      this.$router.push("/");
    },
    publishChart() {
      this.currentChart.published = true;
      this.$store.dispatch("EditChart", this.currentChart);
      this.$router.push("/");
    },
    autoSave() {
      this.closeSaving();
    },
    closeSaving() {
      setTimeout(() => {
        this.$store.dispatch("EditChart", this.currentChart);
      }, 2000);
    },
    autoSaving() {
      this.interval = setInterval(
        this.myInterval,
        // Time For Repeating the cycle
        20000
      );
    },
    myInterval() {
      this.toggleSaving();
    },
    toggleSaving() {
      this.savingChanges = true;
      setTimeout(() => {
        this.savingChanges = false;

        // Time to show the Saving Changes ... ( Text)
      }, 2000);
    },
  },

  computed: {
    image() {
      return require(`@/assets/${this.selectedIcon
        .substring(0, 3)
        .trim()}.png`);
    },
  },
  created() {
    switch (this.$route.query.source) {
      case "chart":
        this.currentChart = this.$store.getters.getChart(
          this.$route.query.chart_id
        );
        break;
      case "template":
        this.$store
          .dispatch(
            "newSizeChartFromTemplate",
            parseInt(this.$route.query.chart_id)
          )
          .then((response) => {
            this.currentChart = response;
          });
    }
    this.autoSaving();
    console.log("Created");
  },
  destroyed() {
    this.savingChanges = false;
    console.log("Destroy");
    clearInterval(this.interval);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-input--is-label-active label,
.v-input--is-focused label {
  left: -14px !important;
}
.v-select__selection {
  width: 100%;
  justify-content: right;
}
.BorderTop {
  border-top: 1pt solid #000000 !important;
}

.BorderBottom {
  border-bottom: 4pt solid #cf1010 !important;
}

.BorderRight {
  border-right: 2px solid #000000 !important;
}

.BorderLeft {
  border-left: 2px solid #000000 !important;
}
.table_row_no_border {
  border: none !important;
}
.table_no_border {
  border: 0px !important;
}

iframe .table_no_border {
  border: 0px !important;
}
/* iframe .table_row_no_border{
  border: none !important;
} */
table:not([cellpadding]) td,
table:not([cellpadding]) th {
  padding: 0.4rem !important;
}
table[border]:not([border="0"]):not([style*="border-color"]) td,
table[border]:not([border="0"]):not([style*="border-color"]) th {
  border-color: #ccc;
}
table {
  border-color: grey;
}

@media (max-width: 1088px) {
  .container {
    max-width: 900px !important;
    margin: 10px auto;
    padding-left: 90px !important;
  }
}
.showClass {
  opacity: 1;
}
.notShow {
  opacity: 0;
}
</style>