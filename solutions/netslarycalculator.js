const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE tax based on KRA rates
function calculatePAYE(grossSalary) {
    let tax = 0;

    // KRA Tax Bands
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        tax = 4800 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        tax = 12400 + (grossSalary - 500000) * 0.325;
    } else {
        tax = 208400 + (grossSalary - 800000) * 0.35;
    }

    // Apply Personal Relief (2,400 Ksh)
    tax -= 2400;
    
    return tax > 0 ? tax : 0; // Ensure the tax is not negative
}

// Function to calculate SHIF deduction
function calculateSHIF(grossSalary) {
    return grossSalary * 0.0275; // 2.75% of Gross Salary
}

// Function to calculate NSSF deduction (based on salary)
function calculateNSSF(grossSalary) {
    let nssf = 0;

    // NSSF Tier I and Tier II contributions
    if (grossSalary <= 8000) {
        nssf = grossSalary * 0.06; // 6% for Tier I
    } else if (grossSalary <= 72000) {
        nssf = grossSalary * 0.06; // 6% for Tier II
    }

    return nssf;
}

// Function to calculate Housing Levy (1.5% of Gross Salary)
function calculateHousingLevy(grossSalary) {
    return grossSalary * 0.015; // 1.5% of Gross Salary
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const paye = calculatePAYE(grossSalary);
    const shif = calculateSHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);

    // Calculate Net Salary
    const netSalary = grossSalary - paye - shif - nssf - housingLevy;

    return {
        grossSalary: grossSalary,
        paye: paye,
        shif: shif,
        nssf: nssf,
        housingLevy: housingLevy,
        netSalary: netSalary
    };
}

// Ask for user input (basic salary and benefits)
rl.question('Enter basic salary: ', (basicSalary) => {
    rl.question('Enter benefits: ', (benefits) => {
        const basicSalaryFloat = parseFloat(basicSalary);
        const benefitsFloat = parseFloat(benefits);

        const salaryDetails = calculateNetSalary(basicSalaryFloat, benefitsFloat);

        // Output results to the console
        console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary}`);
        console.log(`PAYE: Ksh ${salaryDetails.paye}`);
        console.log(`SHIF Deduction: Ksh ${salaryDetails.shif}`);
        console.log(`NSSF Deduction: Ksh ${salaryDetails.nssf}`);
        console.log(`Housing Levy: Ksh ${salaryDetails.housingLevy}`);
        console.log(`Net Salary: Ksh ${salaryDetails.netSalary}`);

        rl.close(); // Close the input interface
    });
});
