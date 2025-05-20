const app = {
  data() {
    return {
      text: "",
      todoArray: ["todo1", "todo2", "todo3", "todo4", "todo5", "todo6"],
    };
  },
  methods: {
    addTodo(todoText) {
      if (todoText.trim() !== "") {
        this.todoArray.push(this.todoText);
      }
    },

    removeTodo(index) {
      this.todoArray.splice(index, 1);
    },
  },
};

Vue.createApp(app).mount("#app");
