const student = {
    name : "Ashish",
    birthyear : 2000, 
}

function calculateage(student){
    const age = 2025 - student.birthyear;
    return(`Hey ${student.name}, your age is ${age}`);
}

console.log(calculateage(student))