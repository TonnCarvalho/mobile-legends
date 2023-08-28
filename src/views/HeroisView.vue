<template>
  <div class="filter">
    <FiltroHeroi
      @filtroClass="selected = $event"
      @filtroRoute="selected = $event"
    />
  </div>
  <div class="herois_view">
    <div class="herois_card">
      <CardHerois :herois="filtroClass" />
      <CardHerois :herois="filtroRoute" />
    </div>
  </div>
</template>

<script>
import FiltroHeroi from "@/components/FiltroHeroi.vue";
import CardHerois from "@/components/heroiComp/CardHerois.vue";
export default {
  components: {
    FiltroHeroi,
    CardHerois,
  },
  data() {
    return {
      herois: [],
      selected: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/herois`)
      .then((resp) => resp.json())
      .then((data) => (this.herois = data));
  },
  computed: {
    filtroClass() {
      if (this.selected) {
        return this.herois.filter((heroi) => heroi.class1 === this.selected || heroi.class2 === this.selected);
      } else {
        return this.selected;
      }
    },
    filtroRoute() {
      if (this.selected) {
        return this.herois.filter((heroi) => heroi.route1 === this.selected);
      } else {
        return this.herois;
      }
    },
  },
};
</script>
<style scoped>
.herois_view {
  max-width: 1200px;
  margin: 10px auto;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background-color: #141414b4;
  backdrop-filter: blur(10px);
  padding: 10px;
}
</style>
