const fs = require("fs");
const path = require("path");

const filePath = path.join(".", "day3.txt");


// for CLI
// const input = process.argv[2];

// writeFile creates a file if it doesnt exist or will overwrite it.
fs.writeFile(filePath, "This is my first note!", (err) => {
    if(err){
        return console.log("Error writting file:", err);
    }
    console.log ("file written successfully")
});

// Appends to the existing filepath
fs.appendFile(filePath, "\nThis is an aditional note.", (err) => {
    if(err){
        return(console.log("Error appending:", err));
    }
    console.log("Text appended");
});

// 
fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        return(console.log("Error reading:", err));
    }
    console.log("File content");
    console.log(data)
});


//appending from cli
// fs.appendFile(filePath, `\n${input}`, (err) => {
//     if(err){
//         return(console.log("Error appending:", err));
//     }
//     console.log("Text appended");
// });
