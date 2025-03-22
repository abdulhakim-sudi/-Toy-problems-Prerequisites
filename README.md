# JavaScript Toy Problems

This repository contains solutions to a set of JavaScript toy problems designed to practice fundamental programming concepts. Each problem has been implemented as a separate JavaScript function, and the solutions are organized in this repository.

## Challenges

### 1. Student Grade Generator
A function that prompts the user to input student marks and outputs a grade based on the following criteria:
- **A**: 80 and above
- **B**: 60 to 79
- **C**: 50 to 59
- **D**: 40 to 49
- **E**: below 40

### 2. Speed Detector
A program that takes a car's speed as input. If the speed is less than 70, it should print "Ok". For every 5 km/h above the speed limit (70), the program will assign one demerit point. If the driver accumulates more than 12 demerit points, the program will print: "License suspended".

### 3. Net Salary Calculator
This program calculates an individual’s net salary based on their **basic salary** and **benefits**. It takes into account various deductions and taxes including Payee (tax), NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and computes the gross and net salary.

#### Key steps involved:
- **Basic Salary Input**: User inputs the basic salary.
- **Benefits Input**: User inputs any additional benefits.
- **Deductions**:
  - **Tax (PAYE)**: Calculated based on the salary brackets.
  - **SHIF Deduction**: A 2.75% deduction based on the salary.
  - **NSSF Deduction**: Deduction based on a percentage of the salary.
  - **Housing Levy**: A 1.5% deduction based on the salary.
- **Gross Salary**: Sum of the basic salary and benefits before deductions.
- **Net Salary**: The final amount after deductions are made.

#### Code Explanation:
```javascript
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
