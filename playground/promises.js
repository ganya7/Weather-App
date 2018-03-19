var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

/*asyncAdd(5, 7).then((res) => {
    console.log("res: ", res);
    return asyncAdd(res, '33');
}, (errorMessage) => {
    console.log(errorMessage);
}).then((res) => {
    console.log('result shoud be', res);
}, (errorMessage) => {
    console.log(errorMessage);
});*/
//using catch

asyncAdd(5, '7').then((res) => {
    console.log("res: ", res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('result shoud be', res);
}).catch(/*only 1 arg ie callback fn*/(errorMessage) => {
    console.log(errorMessage);
});

/*

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('It worked');
        reject('unable to ')
    }, 2500);

});

somePromise.then((message) => {
    console.log("success");
    console.log(message);
}, (errorMessage) => {
    console.log('Error');
    console.log(errorMessage);
}); //called when promise gets fulfilled, pass the value of resolve*/

