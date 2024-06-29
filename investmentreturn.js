export function calculateInvestmentReturn(principal, interestRate, timesCompounded, numOfPeriods) {
    return principal * Math.pow(1 + interestRate / timesCompounded, timesCompounded * numOfPeriods)
};