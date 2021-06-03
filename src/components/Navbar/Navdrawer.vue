<template>
  <div class="navdrawer" style="">
    <div :class="['navigation', mini ? 'active' : '']">
      <ul>
        <li>
          <div class="list-item" @click.stop="toggleMini">
            <span class="icon">
              <img
                src="/logofox.png"
                style="
                  width: 30px;
                  height: 30px;
                  object-fit: cover;
                  margin: 20px auto;
                "
                class="width: 100%;"
                alt=""
              />
            </span>
            <span class="title"> Size Fox </span>
            <span class="icon ml-auto" @click.stop="toggleMini">
              <v-icon dark>mdi-chevron-left</v-icon>
            </span>
          </div>
        </li>

        <li v-for="(item, i) in items" :key="i">
          <div class="list-item" @click.stop="toggleMini">
            <span class="icon">
              <v-icon dark>{{ item.icon }}</v-icon>
            </span>
            <router-link :to="item.link" class="title">{{
              item.title
            }}</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navdrawer",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-home", link: "/" },
        {
          title: "New Size Chart",
          icon: "mdi-sticker-plus-outline",
          link: "/edit",
        },
        { title: "New Care Card", icon: "mdi-water-plus", link: "/" },
        { title: "Icons", icon: "mdi-ruler", link: "/icons" },
        { title: "Plans", icon: "mdi-account-group-outline", link: "/plans" },
        { title: "Help", icon: "mdi-help-circle-outline", link: "/help" },
      ],
      mini: false,
    };
  },
  methods: {
    toggleMini() {
      this.mini = !this.mini;
      this.$emit("offCanvasMain", this.mini);
    },
  },
};
</script>

<style lang="css" scoped>
.navdrawer {
  position: relative;
}
.navbar {
  position: relative;
}
.navigation {
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 80px;
  background: #41c3cf;
  z-index: 99;
  bottom: 0;
  transition: 0.5s;
}
.navigation.active {
  width: 300px;
}
ul {
  list-style: none;
  padding: 0;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  list-style: none;
}

.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
}

.navigation ul li:hover {
  background-color: #2b2828;
}

.navigation ul li .list-item {
  position: relative;
  width: 100%;
  display: block;
  display: flex;
  text-decoration: none;
  color: #6843d1;
  font-weight: 500;
}

.navigation ul li .list-item .icon {
  position: relative;
  display: block;
  min-width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}

.navigation ul li .list-item .icon i {
  font-size: 24px;
}

.navigation ul li .list-item .title {
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
  font-size: 14px !important;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}
</style>