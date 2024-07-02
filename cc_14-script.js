//U9414-0233
import {calculateInterest} from "./modules/interest.js";
import {calculateLoanPayment} from "./modules/loanpayment.js";
import {calculateInvestmentReturn} from "./modules/investmentreturn.js";
import {USDconvert} from "./modules/CurrencyConverter.js";

//check for non-integer inputs and NaN inputs
function validateInput(value) {
    return !isNaN(value) && /^\d+(\.\d+)?$/.test(value);
}

function calculateAndDisplayInterest() {
    const principal = document.getElementById("interest-principal").value;
    const interestRate = document.getElementById("interest-rate").value;
    const numOfPeriods = document.getElementById("interest-periods").value;

    if (!validateInput(principal) || !validateInput(interestRate) || !validateInput(numOfPeriods)) {
        alert("All input fields must be filled out with numbers only, with none left blank.");
        return;
    }

    const principalNum = parseFloat(principal);
    const interestRateNum = parseFloat(interestRate);
    const numOfPeriodsNum = parseFloat(numOfPeriods);
    const result = calculateInterest(principalNum, interestRateNum, numOfPeriodsNum);
    document.getElementById("interest-result").innerText = "Interest: " + USDconvert(result);
}

function calculateAndDisplayLoanPayment() {
    const principal = document.getElementById("loan-principal").value;
    const interestRate = document.getElementById("loan-rate").value;
    const numOfPeriods = document.getElementById("loan-periods").value;

    if (!validateInput(principal) || !validateInput(interestRate) || !validateInput(numOfPeriods)) {
        alert("All input fields must be filled out with numbers only, with none left blank.");
        return;
    }

    const principalNum = parseFloat(principal);
    const interestRateNum = parseFloat(interestRate);
    const numOfPeriodsNum = parseFloat(numOfPeriods);
    const result = calculateLoanPayment(principalNum, interestRateNum, numOfPeriodsNum);
    document.getElementById("loan-result").innerText = "Loan Payment: " + USDconvert(result);
}

function calculateAndDisplayInvestmentReturn() {
    const principal = document.getElementById("investment-principal").value;
    const interestRate = document.getElementById("investment-rate").value;
    const compoundsPerPeriod = document.getElementById("investment-compounds").value;
    const numOfPeriods = document.getElementById("investment-periods").value;

    if (!validateInput(principal) || !validateInput(interestRate) || !validateInput(compoundsPerPeriod) || !validateInput(numOfPeriods)) {
        alert("All input fields must be filled out with numbers only, with none left blank.");
        return;
    }

    const principalNum = parseFloat(principal);
    const interestRateNum = parseFloat(interestRate);
    const compoundsPerPeriodNum = parseFloat(compoundsPerPeriod);
    const numOfPeriodsNum = parseFloat(numOfPeriods);
    const result = calculateInvestmentReturn(principalNum, interestRateNum, compoundsPerPeriodNum, numOfPeriodsNum);
    document.getElementById("investment-result").innerText = "Investment Return: " + USDconvert(result);
}

// Ensure the DOM content is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-interest").addEventListener("click", calculateAndDisplayInterest);
    document.getElementById("calculate-loan").addEventListener("click", calculateAndDisplayLoanPayment);
    document.getElementById("calculate-investment").addEventListener("click", calculateAndDisplayInvestmentReturn);
});