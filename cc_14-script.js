//U9414-0233
import {calculateInterest} from "./modules/interest.js";
import {calculateLoanPayment} from "./modules/loanpayment.js";
import {calculateInvestmentReturn} from "./modules/investmentreturn.js";
import {USDconvert} from "./modules/CurrencyConverter.js";

function calculateAndDisplayInterest() {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const numOfPeriods = parseFloat(document.getElementById('interest-periods').value);
    const result = calculateInterest(principal, interestRate, numOfPeriods);
    document.getElementById('interest-result').innerText = `Interest: ${result.toFixed(2)}`;
}

function calculateAndDisplayLoanPayment() {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const interestRate = parseFloat(document.getElementById('loan-rate').value);
    const numOfPeriods = parseFloat(document.getElementById('loan-periods').value);
    const result = calculateLoanPayment(principal, interestRate, numOfPeriods);
    document.getElementById('loan-result').innerText = `Loan Payment: ${result.toFixed(2)}`;
}

function calculateAndDisplayInvestmentReturn() {
    const principal = parseFloat(document.getElementById('investment-principal').value);
    const interestRate = parseFloat(document.getElementById('investment-rate').value);
    const compoundsPerPeriod = parseFloat(document.getElementById('investment-compounds').value);
    const numOfPeriods = parseFloat(document.getElementById('investment-periods').value);
    const result = calculateInvestmentReturn(principal, interestRate, compoundsPerPeriod, numOfPeriods);
    document.getElementById('investment-result').innerText = `Investment Return: ${result.toFixed(2)}`;
}

// Ensure the DOM content is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calculate-interest').addEventListener('click', calculateAndDisplayInterest);
    document.getElementById('calculate-loan').addEventListener('click', calculateAndDisplayLoanPayment);
    document.getElementById('calculate-investment').addEventListener('click', calculateAndDisplayInvestmentReturn);
});