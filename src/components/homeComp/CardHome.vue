<template>
  <div class="card_container">
    <div v-for="heroi in herois" :key="heroi.id">
      <router-link :to="{ name: 'HeroiView', params: { name: heroi.name } }">
        <div class="card_content">
          <div class="card_head">
            <div class="card_head-info">
              <div class="card_head-class">
                <img :src="heroi.classImg1" class="classe" />
                <img :src="heroi.classImg2" class="classe" />
              </div>

              <span>{{ heroi.name }}</span>
              <img :src="heroi.routeimg" alt="Gold" class="lane" />
            </div>
            <div>
              <p>{{ heroi.subtitle }}</p>
            </div>
          </div>
          <div class="card_img">
            <img :src="heroi.imageCard" />
          </div>
          <div class="card_bottom">
            <p>
              {{ heroi.specialty1 }} | <span>{{ heroi.specialty2 }}</span>
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHomeVue",
  data() {
    return {
      herois: [],
    };
  },
  mounted() {
    fetch(`http://localhost:3000/herois/`)
      .then((resp) => resp.json())
      .then((data) => {
        data = data.slice(1, 6);
        this.herois = data
      });
  },

};
</script>

<style scoped>
.card_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 25px;
  flex-direction: row-reverse;
  padding: 10px;
}
.card_container a {
  text-decoration: none;
}
.card_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  color: #fff;
  width: 210px;
  background-color: #323232;
  cursor: pointer;
}
.card_head {
  width: 100%;
  text-align: center;
  font-size: 15px;
}
.card_head p {
  margin-bottom: 5px;
}
.card_head-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 18px;
}

.card_img {
  border-radius: 3px;
  overflow: hidden;
}
.card_head img {
  width: 25px;
  border-radius: 3px;
}
.card_img img {
  height: 350px;
  width: 200px;
  border-radius: 8px;
  transition: 0.5s ease;
}
.card_img img:hover {
  transform: scale(1.1);
}
.card_bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
</style>
