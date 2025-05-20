const app = {
  data() {
    return {
      text: "hello world",
      isPurple: false,
      textColor: "",
      size: 200,
      angle: 0,
    };
  },

  methods: {},
  computed: {
    circleClass() {
      return {
        purple: this.isPurple,
      };
    },
    circleSize() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        lineheight: `${this.size}px`,
      };
    },
    circleAngle() {
      return {
        transform: `rotate(${this.angle}deg)`,
      };
    },
  },
};

Vue.createApp(app).mount("#app");
