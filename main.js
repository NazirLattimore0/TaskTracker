// <--- connecting to a json file --->
[
  {
    id: 1,
    taskName: "Brush Teeth",
  },
  {
    id: 2,
    taskName: "go to work",
  },
];

const tasks = [
  {
    id: 1,
    taskName: "Brush Teeth",
  },
  {
    id: 2,
    taskName: "go to work",
  },
];
const addTask = {
  taskName: "new task",
};
const newId = tasks.sort((t1, t2) => t1.id - t2.id)[0].id;
addTask.id = newId;
tasks.push(addTask);
fs.saveFile(tasks, fileName);
