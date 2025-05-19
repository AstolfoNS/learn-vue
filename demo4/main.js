const app = {
  data() {
    return {
      text: "Hello Vue!",
    };
  },
  methods: {
    submit() {
      this.text = "Hello World!";
    },
  },
};

Vue.createApp(app).mount("#app");
