let income = document.getElementById("income_slide");
let investments = document.getElementById("other_slide");
let rent = document.getElementById("rent_slide");
let utility = document.getElementById("utility_slide");
let car = document.getElementById("car_slide");
let saving = document.getElementById("saving_slide");
let debt = document.getElementById("debt_slide");
let spending = document.getElementById("spending_slide");
let vacation = document.getElementById("vacation_slide");
let emergency = document.getElementById("emergency_slide");


let final = document.getElementById("income_value");
let other_value = document.getElementById("other_value");
let rent_value = document.getElementById("rent_value");
let utility_value = document.getElementById("utility_value");
let car_value = document.getElementById("car_value");
let saving_value = document.getElementById("saving_value");
let debt_value = document.getElementById("debt_value");
let spending_value = document.getElementById("spending_value");
let vacation_value = document.getElementById("vacation_value");
let emergency_value = document.getElementById("emergency_value");

let submit = document.getElementById("submit");


let credit = 0;
let debit = 0;


income.oninput = function() {   
    nfObject = new Intl.NumberFormat("en-US"); 
    output = nfObject.format(income.value);  
    final.innerHTML = output; 
}

investments.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(investments.value);
    other_value.innerHTML = output;
}

rent.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(rent.value);
    rent_value.innerHTML = output;
}

utility.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(utility.value);
    utility_value.innerHTML = output;
}

car.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US")
    output = nfObject.format(car.value);
    car_value.innerHTML = output;
}

saving.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(saving.value);
    saving_value.innerHTML = output;
}

debt.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(debt.value);
    debt_value.innerHTML = output;
}

spending.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(spending.value);
    spending_value.innerHTML = output;
}

vacation.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(vacation.value);
    vacation_value.innerHTML = output;
    vacation_value = output;
}

emergency.oninput = function() {
    nfObject = new Intl.NumberFormat("en-US");
    output = nfObject.format(emergency.value);
    emergency_value.innerHTML = output;
    emergency_value = output;
}

submit.addEventListener("click", () => {
    console.log(emergency_value)
})