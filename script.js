input_to_eval = [];
output = [];
number1 = [];
operation_status = 1;

// Updates display
function update_display() {
    document.getElementById("result").innerHTML = output.join("");
}

// Adds number to input
function write_number(number) {
    if (operation_status) {
        output = [];
        operation_status = 0;
    }
    input_to_eval.push(number);
    output.push(number);
    update_display();
}

// Adds operator to input
function write_operator(operator) {
    input_to_eval.push(operator);
    number1 = output;
    output = [];
    update_display();
}

// Evaluates input
function calc() {
    output[0] = eval(input_to_eval.join(""));
    input_to_eval = [];
    operation_status = 1;
    update_display();
}