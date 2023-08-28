<template>
  <div :class="background_img"
  :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      background_img: "background_img",
      backgroundImage: '',
    };
  },
  watch: {
      $route(to) {
        this.setBackgroundImage(to.path);
      }
    },
    methods: {
      setBackgroundImage(path) {
        if (path === '/') {
          this.backgroundImage = 'https://wallpapers.com/images/featured-full/mobile-legends-pictures-v0u46grjbqc6h9ga.jpg';
        } else if (path === '/herois') {
          this.backgroundImage = 'https://images2.alphacoders.com/118/1186317.jpg';
        } else if (path === '/historia') {
          this.backgroundImage = 'https://pm1.aminoapps.com/7373/f2fd8d0ca9f1c6c5767a196e4ae9df05aad85436r1-1920-1080v2_uhq.jpg';
        } else {
          this.backgroundImage = ''; 
        }
      }
    },
    created() {
      this.setBackgroundImage(this.$route.path);
    }
};
</script>
<style scoped>
.background_img {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  height: 100vw;
  background-color: #141414;
}
</style>
