/* Instructions
Write a function that takes a number as an argument and
returns a Promise that tests if the value is less than or greater
than the value 10.
If it is greater than 10 it is resolved, if it is less than 10 it is
rejected.
Call the function and print the resolve and reject in a .then,
.catch. */

function greater_than_10(n){
    return new Promise((resolve,reject) => {
        if(n > 10){
            resolve(`${n} is greater than 10`);
        }
        else{
            reject(`${n} is less than 10`);
        }

    })
}

greater_than_10(5).then((result) => console.log(result)).catch((result)=> console.log(result));
