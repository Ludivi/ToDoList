/* Composant racine */
const RootComponent = {
  data() {
    return {
      newTask: "",
      toDoList: [],
      inProgressList: [],
      doneList: [],
      showToDo: true,
      showInProgress: true,
      showDone: true,
    };
  },
  methods: {
    updateNewTask(e) {
      this.newTask = e.target.value;
    },
    addTask() {
      this.toDoList.push(this.newTask);
      this.newTask = "";
    },
    moveToInProgress(index) {
      this.inProgressList.push(this.toDoList[index]);
      this.toDoList.splice(index, 1);
    },
    moveToDone(index) {
      this.doneList.push(this.inProgressList[index]);
      this.inProgressList.splice(index, 1);
    },
    removeTask(index) {
      this.doneList.splice(index, 1);
    },
  },
};

Vue.createApp(RootComponent).mount("#root");
