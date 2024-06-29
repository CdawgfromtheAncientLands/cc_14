function calculateInvestmentReturn(principal, interestRate, compoundsPerPeriod, numOfPeriods) {
    return principal * Math.pow(1 + interestRate / compoundsPerPeriod, compoundsPerPeriod * numOfPeriods)
};