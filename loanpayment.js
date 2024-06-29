export function calculateLoanPayment(principal, rate, numOfPeriods) {
    return principal * (rate * (1+rate)^numOfPeriods)/((1+rate)^numOfPeriods-1)
};