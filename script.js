let input_to_eval = [];
let output = [];
let operation_status = 1;

// Updates display
function update_display() {
    document.getElementById("result").innerHTML = output.join("");
}

// Activates button
function activate_button(operator) {
    document.getElementById(operator).classList.add("active");
}

// Deactive all buttons
function deactivate_all_buttons() {
    let elements = document.getElementsByClassName("active");
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }
}

// Adds number to input
function write_number(number) {
    if (operation_status) {
        input_to_eval = [];  // Clear input to start a new calculation
        output = [];
        operation_status = 0;
    }
    input_to_eval.push(number);
    output.push(number);
    update_display();
}

// Adds operator to input
function write_operator(operator) {
    if (operation_status === 0 && input_to_eval.length > 0 && !isNaN(input_to_eval[input_to_eval.length - 1])) {
        activate_button(operator);
        input_to_eval.push(operator);
        output = [];
        update_display();
    }
}

// Evaluates input
function calc() {
    let result = eval(input_to_eval.join(""));
    if (isFinite(result) === false) {
        output = ["Math Error (/0)"];
    } else {
        output = [result];
    }

    input_to_eval = [result];
    operation_status = 1;
    deactivate_all_buttons();
    update_display();
}

function clean() {
    output = [];
    input_to_eval = [];
    operation_status = 1;
    deactivate_all_buttons();
    update_display();
}

window.onkeydown = function(event) {
    let number = parseInt(event.key);
    if (event.key >= 0 && event.key <= 9) {
        write_number(number);
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        write_operator(event.key);
    } else if (event.key === "Enter") {
        calc();
    }
}