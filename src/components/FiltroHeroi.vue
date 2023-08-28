<template>
  <div class="filter_container">
    <div class="filter_class">
      <ul>
        <li>
          <button
            class="btn_class"
            :class="{ btn_classAtivo: atirador }"
            @click="$emit('filtroClass', 'atirador')"
          >
            <img
              @click="toggleAtirador"
              src="https://images2.imgbox.com/01/c8/lb9x6gOZ_o.png"
              alt="Atirador"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: mago }"
            class="btn_class"
            @click="$emit('filtroClass', 'mago')"
          >
            <img
              @click="toggleMago"
              src="https://images2.imgbox.com/44/7a/UuZogaaQ_o.png"
              alt="Mago"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: soldado }"
            class="btn_class"
            @click="$emit('filtroClass', 'soldado')"
          >
            <img
              @click="toggleSoldado"
              src="https://images2.imgbox.com/a6/e6/GbWLBhON_o.png"
              alt="Soldado"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: assasino }"
            class="btn_class"
            @click="$emit('filtroClass', 'assasino')"
          >
            <img
              @click="toggleAssasino"
              src="https://images2.imgbox.com/3f/80/YeVmDKQr_o.png"
              alt="Assasino"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: tank }"
            class="btn_class"
            @click="$emit('filtroClass', 'tank')"
          >
            <img
              @click="toggleTank"
              src="https://images2.imgbox.com/b9/67/JsoEb0Ax_o.png"
              alt="Tank"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: suporte }"
            class="btn_class"
            @click="$emit('filtroClass', 'suporte')"
          >
            <img
              @click="toggleSuporte"
              src="https://images2.imgbox.com/8b/49/1ZwNjvyZ_o.png"
              alt="Suporte"
            />
          </button>
        </li>
      </ul>
    </div>
    <div class="filter_route">
      <ul>
        <li>
          <button
            :class="{ btn_classAtivo: ouro, ouro: ouro }"
            @click="$emit('filtroRoute', 'ouro')"
            class="btn_route"
          >
            <img
              src="https://images2.imgbox.com/8a/45/i87gKV2G_o.png"
              alt="Ouro"
              @click="toggleOuro"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: mid, mid: mid }"
            @click="$emit('filtroRoute', 'mid')"
            class="btn_route"
          >
            <img
              src="https://images2.imgbox.com/83/0a/5eFdC8SF_o.png"
              alt="Mid"
              @click="toggleMid"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: exp, exp: exp }"
            @click="$emit('filtroRoute', 'exp')"
            class="btn_route"
          >
            <img
              src="https://images2.imgbox.com/43/fa/BjqyOAdA_o.png"
              alt="Exp"
              @click="toggleExp"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: jungle, jungle: jungle }"
            @click="$emit('filtroRoute', 'jungle')"
            class="btn_route"
          >
            <img
              src="https://images2.imgbox.com/77/bc/6vsqrQkn_o.png"
              alt="Jungle"
              @click="toggleJungle"
            />
          </button>
        </li>
        <li>
          <button
            :class="{ btn_classAtivo: rotacao, rotacao: rotacao }"
            @click="$emit('filtroRoute', 'rotação')"
            class="btn_route"
          >
            <img
              src="https://images2.imgbox.com/af/1b/JR1SeovG_o.png"
              alt="Rotação"
              @click="toggleRotacao"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atirador: false,
      mago: false,
      soldado: false,
      assasino: false,
      tank: false,
      suporte: false,
      ouro: false,
      mid: false,
      exp: false,
      jungle: false,
      rotacao: false,
    };
  },
  methods: {
    handleClick(category) {
      if (this.$parent.selectedCategory === category) {
        this.$emit("filter", "All");
      } else {
        this.$emit("filter", category);
      }
    },
    toggleAtirador() {
      if (!this.atirador) {
        this.atirador = true;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleMago() {
      if (!this.mago) {
        this.atirador = false;
        this.mago = true;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleSoldado() {
      if (!this.soldado) {
        this.atirador = false;
        this.mago = false;
        this.soldado = true;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleAssasino() {
      if (!this.assasino) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = true;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleTank() {
      if (!this.tank) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = true;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleSuporte() {
      if (!this.suporte) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = true;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleOuro() {
      if (!this.ouro) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = true;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleMid() {
      if (!this.mid) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = true;
        this.exp = false;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleExp() {
      if (!this.exp) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = true;
        this.jungle = false;
        this.rotacao = false;
      }
    },
    toggleJungle() {
      if (!this.jungle) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = true;
        this.rotacao = false;
      }
    },
    toggleRotacao() {
      if (!this.rotacao) {
        this.atirador = false;
        this.mago = false;
        this.soldado = false;
        this.assasino = false;
        this.tank = false;
        this.suporte = false;
        this.ouro = false;
        this.mid = false;
        this.exp = false;
        this.jungle = false;
        this.rotacao = true;
      }
    },
  },
};
</script>

<style scoped>
.filter_container {
  margin-top: 10px;
}
.filter_class,
.filter_route {
  display: flex;
  justify-content: center;
  background-color: #000000b4;
  max-width: 1200px;
  backdrop-filter: blur(10px);
  padding: 20px;
  margin: 1px auto;
  border-radius: 8px;
}
.filter_class ul,
.filter_route ul {
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
}
.filter_class li,
.filter_route li {
  width: 60px;
  margin: 0 20px;
}
.btn_class,
.btn_route {
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.1s all linear;
  opacity: 0.5;
}

.btn_class:active,
.btn_route:active {
  transform: scale(1.1);
}
.btn_class img,
.btn_route img {
  height: 50px;
  width: 50px;
  border-radius: 3px;
}
.btn_classAtivo {
  opacity: 1;
  border-radius: 100%;
  border: none;
  box-shadow: #ffffff 0px 0px 25px 0px;
}
.ouro {
  box-shadow: #fce583 0px 0px 30px 0px;
}
.mid {
  box-shadow: #5df8e5 0px 0px 30px 0px;
}
.exp {
  box-shadow: #c284d1 0px 0px 30px 0px;
}
.jungle {
  box-shadow: #708ad4 0px 0px 30px 0px;
}
.rotacao {
  box-shadow: #ce6467 0px 0px 30px 0px;
}
</style>
