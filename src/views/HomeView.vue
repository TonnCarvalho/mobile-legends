<template>
  <div class="home_background">
    <div class="home">
      <div class="home_card">
        <CardHome />
      </div>
    </div>
  </div>
</template>

<script>
import CardHome from "@/components/homeComp/CardHome.vue";
export default {
  name: "HomeView",
  components: {
    CardHome,
  },
};
</script>
<style scoped>
.home {
  max-width: 1200px;
  margin: 10px auto;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background-color: #141414b4;
  backdrop-filter: blur(10px);
}
</style>
