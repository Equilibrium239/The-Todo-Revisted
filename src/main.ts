<<<<<<< HEAD
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
=======
import './style.css'

const btn = document.getElementById("addBtn") as HTMLButtonElement | null;
const weekDay = document.getElementById("day") as HTMLInputElement | null;
const TimeofDay = document.getElementById("Time") as HTMLInputElement | null;
const resultDiv = document.getElementById("result") as HTMLDivElement | null;


const createHtml = (TheTods: Tods[]) => {
  const todsContainer = document.getElementById("app") as HTMLDivElement;

  if(todsContainer) {
    todsContainer.innerHTML = "";
  }


}


btn?.addEventListener("click", () => {
  if (!weekDay || !TimeofDay || !resultDiv) return;

  const WD = String(weekDay.value);
  const ToD = String(TimeofDay.value);
  resultDiv.textContent = String(WD+ToD);
});
>>>>>>> 69489d66e3c2258bb28cea7e4a3ae6361bed0c76
