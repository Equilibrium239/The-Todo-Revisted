import './style.css'


function add(day: string, Time:string) {
    return day + Time;
}


const btn = document.getElementById("addBtn") as HTMLButtonElement;
const weekDay = document.getElementById("day") as HTMLInputElement;
const TimeofDay = document.getElementById("Time") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
