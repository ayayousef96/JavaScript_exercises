/**
 *  Instructions
Write two functions that use Promises that you can chain.
The first function, make_capital(), will take in an array of words
and capitalize them, and then the second function, sortWords(),
will sort the words in alphabetical order. If the array contains
anything but strings, it should throw an error.
Call the functions once with an array of words and call it once
with an array that includes at least one item that is not a word.
Print the resolve and reject in a .then, .catch.
 */

function make_capital(words){
    
    return new Promise((resolve,reject) => {
        const capitalized_words=[];
        for(let word of words){
            for(letter of word){
                if(!/[a-zA-Z]+/g.test(letter)) {
                    reject('ERROR : the array includes at least one item that is not a word');
                }
            }
            word = word.toUpperCase();
            capitalized_words.push(word);
        }
        resolve(capitalized_words);
    })
}

//let arr =['a','b'];
//make_capital(arr).then((result) => console.log(result)).catch((error)=> console.log(error));


function sort_words_arr(words){
    return new Promise((reject,resolve) => {
        for(let word of words){
            for(let letter of word){
                if(!/[a-zA-Z]+/g.test(letter)) {
                    reject('ERROR : the array includes at least one item that is not a word');
                }
            }
            
        }
        resolve(words.sort());
    })
        
}

let arr2 = ['caa','d','b','a'];
let arr3=['aya','26'];
make_capital(arr2)
    .then(arr => sort_words_arr(arr))
    .then((result) => console.log(result))
    .catch((error)=> console.log(error));
make_capital(arr3)
    .then(arr => sort_words_arr(arr))
    .then((result) => console.log(result))
    .catch((error)=> console.log(error));

