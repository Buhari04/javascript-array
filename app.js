// ==========================================
// QUESTION 1 — CREATE STUDENT OBJECTS
// ==========================================

const students = [
    {
        id: 1,
        name: "Abdulakeem",
        age: 25,
        grades: [85, 92, 78]
    },

    {
        id: 2,
        name: "Aisha",
        age: 22,
        grades: [72, 68, 75]
    },

    {
        id: 3,
        name: "David",
        age: 21,
        grades: [55, 48, 60]
    },

    {
        id: 4,
        name: "Sarah",
        age: 24,
        grades: [91, 88, 95]
    },

    {
        id: 5,
        name: "Michael",
        age: 23,
        grades: [35, 42, 38]
    }
];

console.log("Students:");
console.log(students);


// ==========================================
// QUESTION 2 — CALCULATE AVERAGES
// ==========================================

function calculateAverage(grades) {

    // Add all grades together
    const total = grades.reduce((sum, grade) => {
        return sum + grade;
    }, 0);

    // Calculate the average
    const average = total / grades.length;

    // Round to 2 decimal places
    return Number(average.toFixed(2));
}


// Test calculateAverage
console.log("Average Test:");
console.log(calculateAverage([85, 92, 78]));


// Add average to every student using map()
const studentsWithAverage = students.map(student => {
    return {
        ...student,
        average: calculateAverage(student.grades)
    };
});

console.log("Students With Average:");
console.log(studentsWithAverage);


// ==========================================
// QUESTION 3 — FILTER PASSING STUDENTS
// ==========================================

function getPassingStudents(students) {

    return students.filter(student => {
        return student.average >= 60;
    });
}

const passing = getPassingStudents(studentsWithAverage);

console.log("Passing Students:");
console.log(passing);


// ==========================================
// QUESTION 4 — FUNCTIONS & CALLBACKS
// ==========================================

// processStudents accepts an array and a callback
function processStudents(students, callback) {

    return students.map(student => {
        return callback(student);
    });
}


// Add letter grade
function addLetterGrade(student) {

    let letterGrade;

    if (student.average >= 90) {
        letterGrade = "A";
    } else if (student.average >= 80) {
        letterGrade = "B";
    } else if (student.average >= 70) {
        letterGrade = "C";
    } else if (student.average >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    return {
        ...student,
        letterGrade: letterGrade
    };
}


// Add Pass or Fail status
function addStatus(student) {

    let status;

    if (student.average >= 60) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    return {
        ...student,
        status: status
    };
}


// Test addLetterGrade callback
const studentsWithGrades = processStudents(
    studentsWithAverage,
    addLetterGrade
);

console.log("Students With Letter Grades:");
console.log(studentsWithGrades);


// Test addStatus callback
const studentsWithStatus = processStudents(
    studentsWithAverage,
    addStatus
);

console.log("Students With Status:");
console.log(studentsWithStatus);