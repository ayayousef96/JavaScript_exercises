/* Instructions:
Your Task: Edit the storm object. Invoke the printSuperPower
function using the storm object as the context of the function.
So your output should be: my superpower is flying.
Well, Storm also controls the weather, so, whatever you
choose! */

const storm = {
    superPower : "flying",
    printfunc : null,
    }
    function printSuperPower() {
    console.log("my superpower is " +
    this.superPower);
    }
storm.printfunc = printSuperPower;
storm.printfunc();