// Arrays Array Methods Callbacks

const students = [
  { name: "Megan", frustrated: true, age: 33 },
  { name: "Emil", frustrated: true, age: 32 },
  { name: "Malibu", frustrated: false, age: 19 },
];

let studentFrustrated = (student) => student.frustrated

const isAFrustratedStudent = students.some(studentFrustrated)

const areAllFrustrated = students.every(studentFrustrated)

const oneFrustratedStudent = students.find(studentFrustrated)

const frustratedStudents = students.filter(studentFrustrated)


console.log(isAFrustratedStudent)

console.log(areAllFrustrated)

console.log(oneFrustratedStudent)

console.log(frustratedStudents)

console.log('------------------------')

const studentOfDrinkingAge = (student) => (student.age >= 21)

const isAStudentOfAge = students.some(studentOfDrinkingAge)

const areAllOfAge = students.every(studentOfDrinkingAge)

const oneStudentOfAge = students.find(studentOfDrinkingAge)

const ofAgeStudents = students.filter(studentOfDrinkingAge)


console.log(isAStudentOfAge)

console.log(isAStudentOfAge)

console.log(oneStudentOfAge)

console.log(ofAgeStudents)

// try using the .reduce method (see Genius scan)