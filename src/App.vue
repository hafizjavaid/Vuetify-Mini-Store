<template>
  <v-app>
    <!-- <Navbar /> -->
    <Navdrawer @offCanvasMain="offCanvasMain" />
     <v-expand-x-transition>
    <v-main :class="[addMargin ? 'aMargin' : '']">
      <router-view />
    </v-main>
     </v-expand-x-transition>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Navdrawer from "@/components/Navbar/Navdrawer";

export default {
  name: "App",

  components: {
    Navbar,
    Navdrawer,
  },

  data: () => ({
    //
    addMargin: false,
  }),
  methods:{
    offCanvasMain(mini)
    {
      if(mini)
      {
        this.addMargin = true
      }
      else{
        this.addMargin = false
      }
    }
  }
};
</script>

<style>
* {
  text-transform: none !important;
  margin: 0;
  padding: 0;
}

.v-btn {
  letter-spacing: 2 !important;
}
.aMargin{
  margin-left: 300px;
}
</style>
