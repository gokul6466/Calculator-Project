
let calculation = localStorage.getItem("calculation") || "";

displayResult();


function updatecalculation(num) {
    calculation += num;
    localStorage.setItem("calculation", calculation);
    displayResult()
}

function operations() {
    calculation = eval(calculation);
    localStorage.setItem("calculation", calculation);
    displayResult()
}
function clearcal() {
    calculation = "";
    localStorage.setItem("calculation", calculation);
    displayResult();
}


localStorage.setItem("calculation", calculation);

function displayResult() {
    document.querySelector(".js-display").innerHTML = calculation;
}

function remove() {
    calculation = calculation.slice(0, -1);
    displayResult()
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        updatecalculation(key);
    }
    else if (key === "Enter") {
        operations();
    }
    else if (key === "Backspace") {
        remove() 
    }
    else if (key === "Escape") {
        clearcal();
    }
})


