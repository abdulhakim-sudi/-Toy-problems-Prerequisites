function getGrade(marks) {
    if (marks >= 80) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

const marks = parseInt(prompt("Enter student marks between 0 and 100: "), 10);

if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Please enter a valid number between 0 and 100.");
} else {
    console.log(`The grade is: ${getGrade(marks)}`);
}
