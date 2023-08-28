<template>
  <div class="card_container">
    <div v-for="heroi in herois" :key="heroi.id">
      <router-link :to="{ name: 'HeroiView', params: { name: heroi.name } }">
        <div class="card_content">
          <div class="card_img">
            <img :src="heroi.imageCard" />
          </div>
          <div class="card_bottom">
            <div class="class">
              <img :src="heroi.classImg1" alt="" />
            </div>
            <div class="card_text">
              <div class="card_text-name">
                <h2>{{ heroi.name }}</h2>
              </div>
              <div>
                <h5>
                  {{ heroi.subtitle }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHomeVue",
  props: {
    herois: Array,
  },
};
</script>

<style scoped>
.card_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
.card_container a {
  text-decoration: none;
}
.card_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  transition: 0.5s ease;
  z-index: 2;
  width: 200px;
}

.card_img {
  overflow: hidden;
  width: 100%;
  height: 300px;
}
.card_img img {
  height: 100%;
  width: 100%;
}
.card_content:hover {
  transform: scale3d(1.3, 1.3, 1);
}
.card_bottom {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #030303;
  width: 100%;
  height: 100px;
  border-top: 1px solid #fff;
  position: relative;
}
.class {
  position: absolute;
  top: -16px;
}
.class img {
  background: #000;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.card_text {
  text-align: center;
  text-transform: uppercase;
}
.card_text-name {
  margin: 5px 0;
}
</style>
