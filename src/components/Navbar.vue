<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <router-link
            to="/"
            :class="{ homeAtivo: homeAtivo }"
            class="link home"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/herois"
            :class="{ heroiAtivo: heroisAtivo }"
            class="link herois"
            >Herois</router-link
          >
        </li>
        <li>
          <router-link
            to="/historia"
            :class="{ historiaAtiva: historiaAtivo }"
            class="link historia"
            >Historia</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarVue",
  data() {
    return {
      homeAtivo: true,
      heroisAtivo: false,
      historiaAtivo: false,
      allRoute: false,
    };
  },
  watch: {
    $route(to) {
      this.classButtonNav(to.path);
    },
  },
  methods: {
    classButtonNav(path) {
      if (path === "/") {
        this.homeAtivo = !this.homeAtivo;
        this.heroisAtivo = false;
        this.historiaAtivo = false;
      } else if (path === "/herois") {
        this.homeAtivo = false;
        this.heroisAtivo = !this.heroisAtivo;
        this.historiaAtivo = false;
      } else if (path === "/historia") {
        this.homeAtivo = false;
        this.heroisAtivo = false;
        this.historiaAtivo = !this.historiaAtivo;
      }
    },
  },
  created() {
    this.classButtonNav(this.$route.path);
  },
};
</script>

<style scoped>
.navbar {
  background-color: #141414b4;
  backdrop-filter: blur(10px);
  padding: 30px;
}
.navbar ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  list-style: none;
  width: 50%;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: aliceblue;
  font-size: 16px;
  position: relative;
  padding: 10px;

}
.home:hover::after {
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  height: 50px;
  width: 50px;
  content: "";
  background: url(https://images2.imgbox.com/e5/86/cWC3DarN_o.png) no-repeat 0 0;
  background-size: 50px 50px;
  animation: left 1s, fly 1s 1s ease-in-out infinite alternate;
}
.herois:hover::after {
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  height: 50px;
  width: 50px;
  content: "";
  background: url(https://images2.imgbox.com/f7/20/HOMXxwZZ_o.png) no-repeat 0 0;
  background-size: 50px 50px;
  animation: left 1s, fly 1s 1s ease-in-out infinite alternate;
}
.historia:hover::after {
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  height: 50px;
  width: 50px;
  content: "";
  background: url(https://images2.imgbox.com/67/8f/Q59RP6Le_o.png) no-repeat 0 0;
  background-size: 50px 50px;
  animation: left 1s, fly 1s 1s ease-in-out infinite alternate;
}
.homeAtivo {
  background-color: #5a459c;
  padding: 10px;
  border-radius: 5px;
  animation: opacity 0.5s linear reverse;
}
.heroiAtivo {
  background-color: #b1393a;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  animation: opacity 0.5s linear reverse;
}
.historiaAtiva {
  background-color: #526a79;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  animation: opacity 0.5s linear reverse;
}
@keyframes left {
  0% {
    transform: translateX(-30px);
    opacity: 0;
    top: -10px;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
    top: -10px;
  }
}
@keyframes fly {
  0% {
    top: -10px;
  }

  100% {
    top: 10px;
  }
}
@keyframes opacity {
  to {
    background: transparent;
  }
  
}
</style>
