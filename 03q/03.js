const VALID_STATUS = new Set (['SUCCESS', 'FINAL', 'DONE'])

const people = [
    { name: 'Max', age: 20, status: 'IN_PROGRESS'},
    { name: 'Sam', age: 21, status: 'DONE'},
    { name: 'Dan', age: 30, status: 'SUCCESS'},
]

const peopleWithValidStatus = people
        .filter(person => VALID_STATUS.has(person.status))
        .map(person => person.name)

console.log(peopleWithValidStatus);
