import './style.css'


function add(day: string, Time:string) {
    return day + Time;
}


const btn = document.getElementById("addBtn") as HTMLButtonElement | null;
const weekDay = document.getElementById("day") as HTMLInputElement | null;
const TimeofDay = document.getElementById("Time") as HTMLInputElement | null;
const resultDiv = document.getElementById("result") as HTMLDivElement | null;




btn?.addEventListener("click", () => {
  if (!weekDay || !TimeofDay || !resultDiv) return;

  const WD = String(weekDay.value);
  const ToD = String(TimeofDay.value);
  resultDiv.textContent = String(WD+ToD);
})
