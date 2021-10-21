import CreateProject from "./CreateProject.js";
import CreateTodo from "./CreateTodo.js";

const myStorage = window.localStorage;

const getAllData = () => {
  const storedProjects = JSON.parse(myStorage.getItem("StoredTodos"));
  let projects = [];
  if (storedProjects == null) {
    return projects;
  }
  storedProjects.forEach((ele) => {
    let todos = [];
    const storedTodos = ele.todos;
    storedTodos.forEach((item) => {
      todos.push(
        CreateTodo(
          item.todoTitle,
          item.todoDescription,
          item.todoDueDate,
          item.todoDateAdded,
          item.todoIsDone,
          item.todoPriority
        )
      );
    });
    projects.push(CreateProject(ele.title, ele.description, todos));
  });
  return projects;
};

const setAllData = (Allprojects) => {
  let toStore = [];
  Allprojects.forEach((element) => {
    const title = element.title;
    const description = element.description;
    let todos = [];

    const tmpTodos = element.todos;

    tmpTodos.forEach((ele) => {
      const todoTitle = ele.title;
      const todoDescription = ele.description;
      const todoDueDate = ele.dueDateISO;
      const todoDateAdded = ele.dateAddedISO;
      const todoIsDone = ele.isDone;
      const todoPriority = ele.priority;
      todos.push({
        todoTitle,
        todoDescription,
        todoDueDate,
        todoDateAdded,
        todoIsDone,
        todoPriority,
      });
    });
    toStore.push({ title, description, todos });
  });
  console.log(JSON.stringify(toStore));
  myStorage.setItem("StoredTodos", JSON.stringify(toStore));
};

export { setAllData, getAllData };
