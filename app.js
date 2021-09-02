const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelector("#custom-tip");
const peopleInput = document.querySelector("#people-input");
const resetButton = document.querySelector("#reset-button");
const tipResult = document.querySelector("#tip-result");
const totalResult = document.querySelector("#total-result");
const tipSelection = document.querySelectorAll(".tip-selection");

let tip = 0; //Default

for (let button of tipSelection) {
    button.addEventListener("click", () => {
        if (!tipInput.value) {
            for (let selection of tipSelection) {
                selection.classList.remove("selected");
            }
            button.classList.add("selected");
            tip = button.innerText.slice(0, -1);
            if (billInput.value && peopleInput.value) {
                calc(billInput.value, tip, peopleInput.value);
            }
        }
    })
}

resetButton.addEventListener("click", () => {
    billInput.value = "";
    tipInput.value = "";
    peopleInput.value = "";
    tipResult.innerText = "$0.00";
    totalResult.innerText = "$0.00";
})

billInput.addEventListener("input", () => {
    if (billInput.value && peopleInput.value) {
        calc(billInput.value, tip, peopleInput.value);
    }
})

tipInput.addEventListener("input", () => {
    if (billInput.value && peopleInput.value && tipInput.value) {
        calc(billInput.value, tipInput.value, peopleInput.value);
    }
    for (let selection of tipSelection) {
        selection.classList.remove("selected");
    }
})

peopleInput.addEventListener("input", () => {
    if (billInput.value && peopleInput.value) {
        calc(billInput.value, tip, peopleInput.value);
    }
})

function calc(bill, tip, people) {
    const tipAmount = (bill * (tip / 100)) / people;
    const totalAmount = (bill / people) + tipAmount;
    tipResult.innerText = `$${tipAmount.toFixed(2)}`;
    totalResult.innerText = `$${totalAmount.toFixed(2)}`;
}