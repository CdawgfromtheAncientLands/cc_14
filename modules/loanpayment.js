function calculateLoanPayment(principal, interestRate, numOfPeriods) {
    return principal * (interestRate * (1+interestRate)^numOfPeriods)/((1+interestRate)^numOfPeriods-1)
};