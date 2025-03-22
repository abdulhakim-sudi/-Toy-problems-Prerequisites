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
This is a program that calculates the net salary of an individual by taking their **basic salary** and **benefits** as inputs. The program computes the following:
- **Gross Salary** = Basic Salary + Benefits
- **PAYE Tax** (Pay As You Earn)
- **SHIF Deduction** (Social Health Insurance Fund)
- **NSSF Deduction** (National Social Security Fund)
- **Housing Levy**
- **Net Salary** = Gross Salary - PAYE - SHIF - NSSF - Housing Levy

## Files in this Repository

- `solutions/studentGradeGenerator.js`: Solution for the Student Grade Generator problem.
- `solutions/speedDetector.js`: Solution for the Speed Detector problem.
- `solutions/netSalaryCalculator.js`: Solution for the Net Salary Calculator problem.

## How to Run the Code

Follow these steps to run the JavaScript files:

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/JavaScript-Toy-Problems.git
## Challenges

### 1. Student Grade Generator
A function that prompts the user to input student marks and outputs a grade based on the following criteria:
- A: 80 and above
- B: 60 to 79
- C: 50 to 59
- D: 40 to 49
- E: below 40

### 2. Speed Detector
A program that takes a car's speed as input. If the speed is less than 70, it should print "Ok". For every 5 km/h above the speed limit (70), the program will assign one demerit point. If the driver accumulates more than 12 demerit points, the program will print: "License suspended".

### 3. Net Salary Calculator
This program calculates an individual’s net salary based on their basic salary and benefits. It takes into account various deductions and taxes including Payee (tax), NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and computes the gross and net salary.

#### Key steps involved:
- **Basic Salary Input**: User inputs the basic salary.
- **Benefits Input**: User inputs any additional benefits.
- **Deductions**:
  - **Tax (Payee)**: Calculated based on the salary brackets.
  - **NHIF Deduction**: Deduction based on predefined rates.
  - **NSSF Deduction**: Deduction based on a percentage of the salary.
- **Gross Salary**: Sum of the basic salary and benefits before deductions.
- **Net Salary**: The final amount after deductions are made.

#### Example Flow:
1. **Input**:
   - Basic Salary: 50,000
   - Benefits: 10,000
2. **Calculation**:
   - Gross Salary = Basic Salary + Benefits
   - Deductions: Tax, NHIF, NSSF
3. **Output**:
   - Gross Salary
   - Tax Deduction
   - NHIF Deduction
   - NSSF Deduction
   - Net Salary

Make sure you mention any specific rules or formulas you've used for tax, NHIF, or NSSF deductions.

---

### 2. **Commit the Changes**
Once you’ve updated the README with the new challenge information, follow these steps to commit and push the changes to GitHub.

- **Add the updated README file** to the staging area:
  ```bash
  git add README.md
