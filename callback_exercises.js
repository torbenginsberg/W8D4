// class Clock {
//     constructor() {
//         let date = new Date();
//         this.hours = date.getHours();
//         this.mins = date.getMinutes();
//         this.secs = date.getSeconds();
//         this.printTime();
//         let time = this;
//         let boundTick = time.tick.bind(time)
//         setInterval(function() { boundTick(); }, 1000);
//     }
// // time.tick.bind(time)
//     printTime() {
//         console.log(`${this.hours}:${this.mins}:${this.secs}`);
//     }

//     tick() {
//             if (this.secs === 59) {
//                 this.secs = 0;
//                 if (this.mins === 59){
//                     this.mins = 0;
//                     if (this.hours === 23) {
//                         this.hours = 0;
//                     } else {this.hours += 1;}
//                 } else { this.mins += 1; }
//             } else {this.secs += 1;}
//             this.printTime() 
//         }
// }


// const readline = require("readline");
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         reader.question("whats the next number", function(answer) {
//             let parsed = parseInt(answer);
//             sum += parsed;
//             console.log(sum);
//             addNumbers(sum, numsLeft-1,completionCallback);
//         });
//     } else {
//         reader.close();
//         completionCallback(sum);
//     }
// }


// Function.prototype.myBind = function(context) {
//     return boundFunc = () => {this.apply(context);}
// } 


// const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Write this first.
// function askIfGreaterThan(el1, el2, callback) {
//     // Prompt user to tell us whether el1 > el2; pass true back to the
//     // callback if true; else false.
//     reader.question(`Is ${el1} larger than ${el2}?`, function(answer) {
//         if (answer === "yes") {
//             return callback(true);
//         } else {
//             return callback(false);
//         }
//         // reader.close();
//     })
// }

// // Once you're done testing askIfGreaterThan with dummy arguments, write this.
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     // Do an "async loop":
//     // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//     //    know whether any swap was made.
//     // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//     //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//     //    continue the inner loop. You'll want to increment i for the
//     //    next call, and possibly switch madeAnySwaps if you did swap.
//         if (i === arr.length - 1) {
//             return outerBubbleSortLoop(madeAnySwaps)
//         } else { 
//             askIfGreaterThan(arr[i], arr[i+1], function(status) {
//                 console.log(arr)
//                 if (status) {
//                     let x = arr[i];
//                     arr[i] = arr[i+1];
//                     arr[i+1] = x;
//                     madeAnySwaps = true;
//                 }
//                 return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
//             })
//         }

// }

// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {
//         // Begin an inner loop if you made any swaps. Otherwise, call
//         // `sortCompletionCallback`.
//         if (madeAnySwaps) {
//             return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//         } else {
//             reader.close();
//             return sortCompletionCallback(arr);
//         }
//     }

//     return outerBubbleSortLoop(true);
//     // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });


Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    if (tooSoon === false) {
        tooSoon = true;
        setTimeout(function() {
            tooSoon = false;
        }, interval);
        return this();
    }
}