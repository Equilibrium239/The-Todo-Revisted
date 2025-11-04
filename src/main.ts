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
