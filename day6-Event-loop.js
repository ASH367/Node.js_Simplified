console.log("start");

setTimeout(() => {
    console.log("Inside setTimeout");
},0);


setImmediate(() => {
    console.log("inside Immediate");
});

console.log("end");