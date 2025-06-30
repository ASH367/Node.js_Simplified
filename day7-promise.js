//Create a Promise that immediately resolves
const myPromise = new Promise((resolve, reject) => {
    resolve("it worked");
})

myPromise.then((result) => {
    console.log(result);
})

//Create a Promise with setTimeout
const waitPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done waiting");
    }, 1000)
});

waitPromise.then((result) => {
    console.log(result);
})


//Let's write your OWN function that returns a Promise
function getData(){
    return new Promise((resolve, reject) => {
        resolve("Data is ready");
    });
}


getData().then((result) => {
    console.log(result);
});


//Simulate async with setTimeout
function getDelayedData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here's the delayed data!");
        }, 2000);
    });
}


getDelayedData().then((result) => {
    console.log(result);
});

//Add Reject
function mayFail(shouldFail){
    return new Promise((resolve, reject) => {
        if(shouldFail){
            reject("something went wrong.");
        }
        else{
            resolve("all good!");
        }
    });
}

mayFail(false)
    .then(console.log)
    .catch(console.error);

mayFail(true)
    .then(console.log)
    .catch(console.error);