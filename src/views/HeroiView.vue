<template>
  <div
    class="heroi_container"
    v-for="(heroi, index) in herois"
    :key="heroi.id"
    :index="index"
  >
    <div class="heroi">
      <div
        class="heroi_header"
        :style="{ backgroundImage: `url('${heroi.banner}')` }"
      >
        <h1>{{ heroi.name }}</h1>
        <h2>{{ heroi.subtitle }}</h2>
        <div class="heroi_gradient-header"></div>
      </div>
    </div>
    <div class="heroi_content">
      <div class="heroi_info-description">
        <div class="heroi_info-description-item">
          <img :src="heroi.classImg1" />
          <p>{{ heroi.class1 }}</p>
        </div>
        <div class="heroi_info-description-item" v-if="heroi.class2">
          <img :src="heroi.classImg2" />
          <p>{{ heroi.class2 }}</p>
        </div>
        <div class="heroi_info-description-item">
          <img :src="heroi.routeimg" />
          <p :style="{ color: textStyle(heroi) }">{{ heroi.route1 }}</p>
        </div>
        <div class="heroi_info-description-item" v-if="heroi.route2">
          <img :src="heroi.routeimg" />
          <p>{{ heroi.route2 }}</p>
        </div>
      </div>
      <div class="heroi_info-about">
        <p>
          {{ heroi.aboutHero }}
        </p>
      </div>
      <div class="heroi_info">
        <div class="heroi_skill-img">
          <span>Passiva</span>
          <img
            :src="heroi.passiveImg"
            @click="togglePassive"
            :class="{ skillActive: passive }"
          />
          <p>{{ heroi.passiveName }}</p>
        </div>
        <div class="heroi_skill-img">
          <span>1</span>
          <img
            :src="heroi.skill1Img"
            @click="toggleSkill1"
            :class="{ skillActive: skill1 }"
          />
          <p>{{ heroi.skill1Name }}</p>
        </div>
        <div class="heroi_skill-img">
          <span>2</span>
          <img
            :src="heroi.skill2Img"
            @click="toggleSkill2"
            :class="{ skillActive: skill2 }"
          />
          <p>{{ heroi.skill2Name }}</p>
        </div>
        <div class="heroi_skill-img" v-if="heroi.skill3Name">
          <span>3</span>
          <img
            :src="heroi.skill3Img"
            @click="toggleSkill3"
            :class="{ skillActive: skill3 }"
          />
          <p>{{ heroi.skill3Name }}</p>
        </div>
        <div class="heroi_skill-img">
          <span>Ultimate</span>
          <img
            :src="heroi.ultimateImg"
            @click="toggleUltimate"
            :class="{ skillActive: ultimate }"
          />
          <p>{{ heroi.ultimateName }}</p>
        </div>
      </div>

      <div class="heroi_skill-description">
        <div class="heroi_skill-item" v-if="passive">
          <h3>{{ heroi.passiveName }}</h3>
          <p>{{ heroi.passiveDescription }}</p>
        </div>
        <div class="heroi_skill-item" v-if="skill1">
          <h3>{{ heroi.skill1Name }}</h3>
          <p>{{ heroi.skill1Description }}</p>
        </div>
        <div class="heroi_skill-item" v-if="skill2">
          <h3>{{ heroi.skill2Name }}</h3>
          <p>{{ heroi.skill2Description }}</p>
        </div>
        <div class="heroi_skill-item" v-if="skill3">
          <h3>{{ heroi.skill3Name }}</h3>
          <p>{{ heroi.skill3Description }}</p>
        </div>
        <div class="heroi_skill-item" v-if="ultimate">
          <h3>{{ heroi.ultimateName }}</h3>
          <p>{{ heroi.ultimateDescription }}</p>
        </div>
      </div>
      <div class="heroi_skins">
        <div class="heroi_skins-info">
          <div class="heroi_skins-avatar">
            <ul>
              <li v-if="heroi.skins.skinName1">
                <button
                  @click="toggleSkin1"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin1 }"
                >
                  <img :src="heroi.skins.skinsAvatar1" />
                  <span>{{ heroi.skins.skinName1 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName2">
                <button
                  @click="toggleSkin2"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin2 }"
                >
                  <img :src="heroi.skins.skinsAvatar2" />
                  <span>{{ heroi.skins.skinName2 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName3">
                <button
                  @click="toggleSkin3"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin3 }"
                >
                  <img :src="heroi.skins.skinsAvatar3" />
                  <span>{{ heroi.skins.skinName3 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName4">
                <button
                  @click="toggleSkin4"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin4 }"
                >
                  <img :src="heroi.skins.skinsAvatar4" />
                  <span>{{ heroi.skins.skinName4 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName5">
                <button
                  @click="toggleSkin5"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin5 }"
                >
                  <img :src="heroi.skins.skinsAvatar5" />
                  <span>{{ heroi.skins.skinName5 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName6">
                <button
                  @click="toggleSkin6"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin6 }"
                >
                  <img :src="heroi.skins.skinsAvatar6" />
                  <span>{{ heroi.skins.skinName6 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName7">
                <button
                  @click="toggleSkin7"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin7 }"
                >
                  <img :src="heroi.skins.skinsAvatar7" />
                  <span>{{ heroi.skins.skinName7 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName8">
                <button
                  @click="toggleSkin8"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin8 }"
                >
                  <img :src="heroi.skins.skinsAvatar8" />
                  <span>{{ heroi.skins.skinName8 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName9">
                <button
                  @click="toggleSkin9"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin9 }"
                >
                  <img :src="heroi.skins.skinsAvatar9" />
                  <span>{{ heroi.skins.skinName9 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName10">
                <button
                  @click="toggleSkin10"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin10 }"
                >
                  <img :src="heroi.skins.skinsAvatar10" />
                  <span>{{ heroi.skins.skinName10 }}</span>
                </button>
              </li>
              <li v-if="heroi.skins.skinName11">
                <button
                  @click="toggleSkin11"
                  class="heroi_skins-avatar-button"
                  :class="{ skinAtivo: skin11 }"
                >
                  <img :src="heroi.skins.skinAvatar11" />
                  <span>{{ heroi.skins.skinName11 }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="heroi_skins-banner">
          <ul>
            <li v-if="skin1">
              <img :src="heroi.skins.skinBanner1" />
            </li>
            <li v-if="skin2">
              <img :src="heroi.skins.skinBanner2" />
            </li>
            <li v-if="skin3">
              <img :src="heroi.skins.skinBanner3" />
            </li>
            <li v-if="skin4">
              <img :src="heroi.skins.skinBanner4" />
            </li>
            <li v-if="skin5">
              <img :src="heroi.skins.skinBanner5" />
            </li>
            <li v-if="skin6">
              <img :src="heroi.skins.skinBanner6" />
            </li>
            <li v-if="skin7">
              <img :src="heroi.skins.skinBanner7" />
            </li>
            <li v-if="skin8">
              <img :src="heroi.skins.skinBanner8" />
            </li>
            <li v-if="skin9">
              <img :src="heroi.skins.skinBanner9" />
            </li>
            <li v-if="skin10">
              <img :src="heroi.skins.skinBanner10" />
            </li>
            <li v-if="skin11">
              <img :src="heroi.skins.skinBanner11" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHeroVue",
  components: {},

  data() {
    return {
      herois: [],
      passive: true,
      skill1: false,
      skill2: false,
      skill3: false,
      ultimate: false,
      selected: null,
      skin1: true,
      skin2: false,
      skin3: false,
      skin4: false,
      skin5: false,
      skin6: false,
      skin7: false,
      skin8: false,
      skin9: false,
      skin10: false,
      skin11: false,
    };
  },

  mounted() {
    fetch(`http://localhost:3000/herois/?name=${this.$route.params.name}`)
      .then((resp) => resp.json())
      .then((data) => (this.herois = data));
  },
  methods: {
    togglePassive() {
      if (!this.passive) {
        this.passive = true;
        this.skill1 = false;
        this.skill2 = false;
        this.skill3 = false;
        this.ultimate = false;
        this.skillAtivo = false;
      }
    },
    toggleSkill1() {
      if (!this.skill1) {
        this.passive = false;
        this.skill1 = true;
        this.skill2 = false;
        this.skill3 = false;
        this.ultimate = false;
        this.skillAtivo = false;
      }
    },
    toggleSkill2() {
      if (!this.skill2) {
        this.passive = false;
        this.skill1 = false;
        this.skill2 = true;
        this.skill3 = false;
        this.ultimate = false;
      }
    },
    toggleSkill3() {
      if (!this.skill1) {
        this.passive = false;
        this.skill1 = false;
        this.skill2 = false;
        this.skill3 = true;
        this.ultimate = false;
      }
    },
    toggleUltimate() {
      if (!this.ultimate) {
        this.passive = false;
        this.skill1 = false;
        this.skill2 = false;
        this.skill3 = false;
        this.ultimate = true;
      }
    },
    toggleSkin1() {
      if (!this.skin1) {
        this.skin1 = true;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin2() {
      if (!this.skin2) {
        this.skin1 = false;
        this.skin2 = true;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin3() {
      if (!this.skin3) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = true;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin4() {
      if (!this.skin4) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = true;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin5() {
      if (!this.skin5) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = true;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin6() {
      if (!this.skin6) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = true;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin7() {
      if (!this.skin7) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = true;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin8() {
      if (!this.skin8) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = true;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin9() {
      if (!this.skin9) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = true;
        this.skin10 = false;
        this.skin11 = false;
      }
    },
    toggleSkin10() {
      if (!this.skin10) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = true;
        this.skin11 = false;
      }
    },
    toggleSkin11() {
      if (!this.skin11) {
        this.skin1 = false;
        this.skin2 = false;
        this.skin3 = false;
        this.skin4 = false;
        this.skin5 = false;
        this.skin6 = false;
        this.skin7 = false;
        this.skin8 = false;
        this.skin9 = false;
        this.skin10 = false;
        this.skin11 = true;
      }
    },
  },
  computed: {
    textStyle() {
      return (heroi) => {
        if (heroi.route1 == "ouro") {
          return "#fce583";
        } else if (heroi.route1 == "exp") {
          return "#c284d1";
        } else if (heroi.route1 == "mid") {
          return "#5DF8E5";
        } else if (heroi.route1 == "jungle") {
          return "#3D4D78";
        } else if (heroi.route1 == "rotação") {
          return "#b05659";
        }
      };
    },
  },
};
</script>

<style scoped>
.heroi_container {
  position: relative;
  background: #141414;
}
.heroi {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
}
.heroi_header {
  align-items: center;
  background: #ebebeb;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: 0 0 2rem #000, 0 0 4rem #000;
  height: 40vw;
  width: 100%;
  position: relative;
}
.heroi_header h1 {
  padding-top: 30%;
  font-weight: 300;
  font-size: 5rem;
  letter-spacing: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  z-index: 10;
}
.heroi_header h2 {
  font-weight: 100;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: #fff;
  z-index: 10;
}
.heroi_gradient-header {
  background: linear-gradient(0deg, #000000, transparent);
  height: 40%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 5;
}
.heroi_content {
  max-width: 1200px;
  margin: 0 auto;
}
.heroi_info-description {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  padding: 20px 0;
}
.heroi_info-description img {
  width: 100px;
  height: 100px;
}
.heroi_info-description-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.heroi_info-about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5px;
  font-weight: 200;
  font-size: 18px;
  color: #fff;
  line-height: 1.5;
}
.heroi_info {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 8px 8px 0 0;
  margin: 10px auto 0;
}
.heroi_skill-img {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
  color: #fff;
}
.heroi_skill-img img {
  height: 100px;
  width: 100px;
  cursor: pointer;
}
.heroi_skill-img p {
  font-size: 14px;
}
.skillActive {
  border-radius: 100%;
  box-shadow: rgb(255, 255, 255) 0px 0px 25px 0px;
  transform: translateY(-5px);
  transition: 0.5s ease;
}
.heroi_skill-description {
  max-width: 1200px;
  border-radius: 0 0 8px 8px;
  margin: 0px auto;
  border: 1px solid rgb(255, 255, 255);
  padding: 20px;
}
.heroi_skill-item {
  font-weight: 200;
  font-size: 18px;
  color: #fff;
  line-height: 1.5;
  animation: text 1s forwards;
}
.heroi_skill-item h3 {
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.heroi_skins {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
}
.heroi_skins-avatar {
  overflow-y: scroll;
  height: 500px;
}
.heroi_skins-avatar li {
  list-style: none;
  margin: 10px 0;
}
.heroi_skins-avatar-button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background: #141414;
  border: none;
  cursor: pointer;
  border-radius: 100px 0px 0px 100px;
  width: 100%;
}
.skinAtivo {
  background: #363636;
}
.heroi_skins-avatar button span {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}
.heroi_skins-avatar img {
  height: 60px;
}

.heroi_skins-banner {
  display: flex;
  flex-direction: column;
}
.heroi_skins-banner li {
  list-style: none;
}
.heroi_skins-banner img {
  height: 500px;
}
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #141414 #363636;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-track {
  background: #141414;
}

*::-webkit-scrollbar-thumb {
  background-color: #363636;
  border-radius: 8px;
  border: 0px ridge #ffffff;
}
@keyframes text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
