let count = 0;
const countEl = document.getElementById("count");

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function incrementByFive() {
    count += 5;
    countEl.textContent = count;
}

function decrementByTen() {
    count -= 10;
    countEl.textContent = count;
}

function incrementByInput() {
    const inputNum = parseInt(document.getElementById("input-num").value);
    if (!isNaN(inputNum)) {
        count += inputNum;
        countEl.textContent = count;
    }
}

function decrementByInput() {
    const inputNum = parseInt(document.getElementById("input-num").value);
    if (!isNaN(inputNum)) {
        count -= inputNum;
        countEl.textContent = count;
    }
}
