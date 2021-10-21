import { format } from "date-fns";

const CreateTodo = (
  title,
  description,
  duedate,
  dateAdded = "",
  isDone = false,
  priority = "low"
) => {
  let todoTitle = title;
  let todoDescription = description;
  let todoDueDate = duedate;
  let todoIsDone = isDone;
  let todoPriority = priority;
  let todoDateAdded = dateAdded;

  if (todoDateAdded == "") {
    todoDateAdded = new Date();
  }
  let todoDateAddedString = format(todoDateAdded, "P");

  let todoDueDateString = format(todoDueDate, "P");
  const calculateDaysLeftInString = () =>
    (todoDueDateString = format(todoDueDate, "P"));

  const updateAll = (title, description, dueDate, priority) => {
    todoTitle = title;
    todoDescription = description;
    todoDueDate = dueDate;
    todoPriority = priority;
    setAllData(projects);
  };

  return {
    get title() {
      return todoTitle;
    },
    get description() {
      return todoDescription;
    },
    get dateAdded() {
      return todoDateAddedString;
    },
    get dueDate() {
      calculateDaysLeftInString();
      return todoDueDateString;
    },
    get dueDateISO() {
      return todoDueDate;
    },
    get dateAddedISO() {
      return todoDateAdded;
    },
    get priority() {
      return todoPriority;
    },
    get isDone() {
      return todoIsDone;
    },
    set isDone(val) {
      setAllData(projects);
      todoIsDone = val;
    },
    updateAll,
  };
};

export default CreateTodo;
