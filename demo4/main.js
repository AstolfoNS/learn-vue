const app = {
  data() {
    return {
      perspective: 200,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    handleReset() {
      this.perspective = 200;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
  },
  computed: {
    boxStyle() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
};

Vue.createApp(app).mount("#app");
