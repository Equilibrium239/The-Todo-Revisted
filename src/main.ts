import "./style.css";

const todos: string[] = ["Test", "Test igen"]

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todoInput = document.getElementById("todoText");

  if (todoInput) {
    const theText = (todoInput as HTMLInputElement).value;

    todos.push(theText);
    createHtml();
  }
};

const createHtml = () => {
  const ul = document.getElementById("todoList");

  if (ul) {
    ul.innerHTML = "";
  }

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = todos[i];

    ul?.appendChild(li);
  }
};

document.getElementById("todoForm")?.addEventListener("submit", handleSubmit);

createHtml();
