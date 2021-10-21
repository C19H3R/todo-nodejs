import { compareAsc } from "date-fns";
import { HIGH, LOW, MED } from "../utility/priorityOptions.js";
import { DATE_ADDED, DUE_DATE, PRIOTITY } from "../utility/SortingOptions.js";

const CreateProject = (title, description, todos = []) => {
  let projectTitle = title;
  let projectTodos = todos;
  let projectDescription = description;
  let sortType = DATE_ADDED;

  const addTodo = (todo) => projectTodos.push(todo);
  const removeTodo = (toRemove) => {
    projectTodos = projectTodos.filter((i, idx) => idx != toRemove);
    return projectTodos;
  };
  const getTodoByID = (id) => projectTodos[id];
  //Priority Sort

  const _getPriorityIdx = (priority) => {
    switch (priority) {
      case HIGH:
        return 1;
      case MED:
        return 0;
      case LOW:
        return -1;
    }
  };
  const _comparePriority = (a, b) => {
    if (_getPriorityIdx(a.priority) < _getPriorityIdx(b.priority)) {
      return 1;
    }
    if (_getPriorityIdx(a) > _getPriorityIdx(b)) {
      return -1;
    }
    return 0;
  };
  const sortByPriority = () => {
    projectTodos.sort(_comparePriority);
    sortType = PRIOTITY;
    return projectTodos;
  };

  //DueDate Sort
  const _compareDueDates = (a, b) => {
    return compareAsc(a.dueDateISO, b.dueDateISO);
  };
  const sortByDueDate = () => {
    projectTodos.sort(_compareDueDates);
    sortType = DUE_DATE;
    return projectTodos;
  };

  //DateAdded Sort
  const _compareDateAdded = (a, b) => {
    return compareAsc(a.dateAddedISO, b.dateAddedISO);
  };
  const sortByDateAdded = () => {
    projectTodos.sort(_compareDateAdded);
    sortType = DATE_ADDED;
    return projectTodos;
  };

  const updateProjectDetails = (title, description = projectDescription) => {
    projectDescription = description;
    projectTitle = title;
  };

  return {
    get title() {
      return projectTitle;
    },
    get description() {
      return projectDescription;
    },
    set title(val) {
      projectTitle = val;
    },
    get todos() {
      return projectTodos;
    },
    get sortOrder() {
      return sortType;
    },
    addTodo,
    removeTodo,
    getTodoByID,
    updateProjectDetails,
    sortByPriority,
    sortByDueDate,
    sortByDateAdded,
  };
};

export default CreateProject;
