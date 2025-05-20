const app = {
  data() {
    return {
      text: "",
      todoArray: [
        {
          item: "todo1",
          completed: false,
        },
        {
          item: "todo2",
          completed: false,
        },
        {
          item: "todo3",
          completed: false,
        },
        {
          item: "todo4",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(todoText) {
      if (todoText.trim() !== "") {
        this.todoArray.push({
          item: todoText,
          completed: false,
        });
      }
    },

    removeTodo(index) {
      this.todoArray.splice(index, 1);
    },

    todoStyle(i) {
      return {
        textDecoration: this.todoArray[i].completed ? "line-through" : "none",
      };
    },

    completeTodo(index) {
      this.todoArray[index].completed = true;
    },
  },
};

Vue.createApp(app).mount("#app");
