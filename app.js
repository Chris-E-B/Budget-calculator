let income = document.getElementById("income_slide");
let investments = document.getElementById("other_slide");
let rent = document.getElementById("rent_slide");
let utility = document.getElementById("utility_slide");
let car = document.getElementById("car_slide");
let debt = document.getElementById("debt_slide");
let spending = document.getElementById("spending_slide");
let vacation = document.getElementById("vacation_slide");
let emergency = document.getElementById("emergency_slide");
let misc_cash = document.getElementById("misc_cash");
let misc_nesc = document.getElementById("misc_nesc");
let misc_want = document.getElementById("misc_want");

let fifty = document.getElementById("fifty_percent");
let thirty = document.getElementById("thirty_percent");
let twenty = document.getElementById("twenty_percent");


let final = document.getElementById("income_value");
let other_value = document.getElementById("other_value");
let rent_value = document.getElementById("rent_value");
let utility_value = document.getElementById("utility_value");
let car_value = document.getElementById("car_value");
let debt_value = document.getElementById("debt_value");
let spending_value = document.getElementById("spending_value");
let vacation_value = document.getElementById("vacation_value");
let emergency_value = document.getElementById("emergency_value");

let submit = document.getElementById("submit");

nfObject = new Intl.NumberFormat("en-US"); 

let check_income = document.getElementById("check_income");


income.oninput = function() {   
    income_output = nfObject.format(income.value);  
    final.innerHTML = income_output; 
}

investments.oninput = function() {
    investments_output = nfObject.format(investments.value);
    other_value.innerHTML = investments_output;
}

rent.oninput = function() {
    rent_output = nfObject.format(rent.value);
    rent_value.innerHTML = rent_output;
}

utility.oninput = function() {
    utility_output = nfObject.format(utility.value);
    utility_value.innerHTML = utility_output;
}

car.oninput = function() {
    car_output = nfObject.format(car.value);
    car_value.innerHTML = car_output;
}


debt.oninput = function() {
    debt_output = nfObject.format(debt.value);
    debt_value.innerHTML = debt_output;
}

spending.oninput = function() {
    spending_output = nfObject.format(spending.value);
    spending_value.innerHTML = spending_output;
}

vacation.oninput = function() {
    vacation_output = nfObject.format(vacation.value);
    vacation_value.innerHTML = vacation_output;
}

emergency.oninput = function() {
    emergency_output = nfObject.format(emergency.value);
    emergency_value.innerHTML = emergency_output;
}

submit.addEventListener("click", () => {


    let piechart = document.getElementById("pie_chart");

    let popup = document.getElementById("popup_container");
    popup.style.visibility = "visible";
    let status = document.getElementById("status");

    let income_number = parseInt(income.value);
    let investments_number = parseInt(investments.value);
    let misc_cash_number = parseInt(misc_cash.value);

    let credit = income_number + investments_number + misc_cash_number;
    
    let credit_output = nfObject.format(credit);
    check_income.innerHTML = credit_output;

    let rent_number = parseInt(rent.value);
    let utility_number = parseInt(utility.value)
    let car_number = parseInt(car.value);
    let debt_number = parseInt(debt.value);
    let misc_nesc_number = parseInt(misc_nesc.value);
    let spending_number = parseInt(spending.value);
    let vacation_number = parseInt(vacation.value);
    let emergency_number = parseInt(emergency.value);
    let misc_want_number = parseInt(misc_want.value)
    let debit = rent_number + utility_number + car_number  + debt_number + misc_nesc_number + spending_number + vacation_number + emergency_number + misc_want_number;

    let needs = rent_number + utility_number + car_number + debt_number + misc_nesc_number;
    let wants = spending_number + vacation_number + emergency_number + misc_want_number;

    let savings = credit - (needs + wants);

    let needs_check = document.getElementById("needs_check");
    let needs_output = nfObject.format(needs);
    needs_check.innerHTML = needs_output;

    let wants_check = document.getElementById("wants_check");
    let wants_output = nfObject.format(wants);
    wants_check.innerHTML = wants_output;

    let savings_check = document.getElementById("savings_check");
    let savings_output = nfObject.format(savings);
    savings_check.innerHTML = savings_output;

    if (credit < debit) {
        status.innerHTML = "Bad"
        status.style.color = "var(--bad)"
    }

    if ( credit + 200 > debit) {
        status.innerHTML = "Ok"
        status.style.color = "var(--ok)"
    }

    if ( credit > debit + 500) {
        status.innerHTML = "Great"
        status.style.color = "var(--great)"
    }

    let needs_color = (needs/credit)  * 360;
    let wants_color = needs_color + (wants/credit) * 360;

    console.log(needs_color);
    console.log(wants_color);
    
    let fifty_input = credit * .5;
    let fifty_outcome = nfObject.format(fifty_input)
    fifty.innerHTML = fifty_outcome

    let thirty_input = credit * .3;
    let thirty_outcome = nfObject.format(thirty_input);
    thirty.innerHTML = thirty_outcome;

    let twenty_input = credit * .2;
    let twenty_outcome = nfObject.format(twenty_input);
    twenty.innerHTML = twenty_outcome;
    
    piechart.style.backgroundImage = `conic-gradient(red 0 ${needs_color}deg,#FFBF00 0 ${wants_color}deg, green 0 `

})

let times = document.getElementById("times");
let popup = document.getElementById("popup_container");

times.addEventListener("click", () => {
    popup.style.visibility = "hidden";
})

let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    location.reload();
})

let check = document.getElementById("check_button");
let popup_2 = document.getElementById("popup_container_2");
let times_2 = document.getElementById("times_2");

check.addEventListener("click", () => {
    popup_2.style.visibility = "visible";
    popup.style.visibility = "hidden";
})

times_2.addEventListener("click", () => {
    popup_2.style.visibility = "hidden";
})

