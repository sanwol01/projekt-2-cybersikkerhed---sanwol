const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");
const mails = document.querySelectorAll(".mail");

const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Start": 
            console.log("Start was click");
            stages[0].classList.remove("aktiv");
            stages[1].classList.add("aktiv");
        break;

        /*
        case "Option 1":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
        break;
        case "Option 2":
            stages[1].classList.remove("active");
            stages[3].classList.add("active");
        break;
        case "Option 3":
            stages[1].classList.remove("active");
            stages[4].classList.add("active");
        break;
        case "Start over":
            stages[2].classList.remove("active");
            stages[3].classList.remove("active");
            stages[4].classList.remove("active");
            stages[0].classList.add("active");
        break;
*/

        default: console.log("Don't know");
    }
}

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}



const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Start": 
            console.log("Start was click");}
            stages[0].classList.remove("aktiv");
            stages[1].classList.add("aktiv");
        break;}