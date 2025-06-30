//Write a function called doubleAsync that:

//Takes a number

//Returns a Promise

//After 1 second, resolves with double the number

function doubleAsync(num){
    return new Promise((resolve, reject) => {
        if(num){
            setTimeout(() => {
                resolve(num * 2);
            },1000);
        }
        else{
            reject("give a num as parameter")
        }
    });
}

doubleAsync(5)
    .then(console.log)
    .catch(console.error);
