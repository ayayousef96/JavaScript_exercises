/*1 */
console.log(this);
//logs empty obj beacuse it refers to the outter scope obj and there is none

/*2 */
const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();
//a- points to undefined obj because it arrow function
//b- change to regular function


/*3 */
const myFuncDec = function () {
    console.log(this);
};
//myFuncDec();
//points to myFunDec function obj

/*4 */
const myFuncArrow = () => {
    console.log(this);
    };
myFuncArrow();
//points to {} - empty obj beacuse its arrow function

/*5 */
document.querySelector(".element").addEventListener(()=>{
    console.log(this);
})
//points to {} beacuse arrow function and can be fixed by declaring function

    
