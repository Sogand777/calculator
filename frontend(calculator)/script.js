const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-val]");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.getAttribute("data-val");
    });
});

equal.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

clear.addEventListener("click", () => {
    display.value = "";
});