const name = "Ashish";
let age = 25;
const isLearning = true;

console.log("Name: ", name);
console.log("In 5 years, age will be:", age + 5);
console.log("Learning JavaScript?", isLearning);

const tools = ["node.js", "VS Code", "Git"];


//Array+Loop
for(let i = 0;i<tools.length; i++){
    console.log(`tool ${i + 1}: ${tools[i]}`);
}


//Object+Accessing properties
const student = {
    name: "Ashish",
    course: "Node.js Bootcamp",
    daysLearning: 2,
};

console.log(`${student.name} is on Day ${student.daysLearning} of ${student.course}`);

// function + call

function greet(user){
    return `Hello, ${user}! Welcome to JavaScript`;
}

console.log(greet("Ashish"))