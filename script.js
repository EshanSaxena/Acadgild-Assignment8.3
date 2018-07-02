/* JS code to write function printTimesTable whic prints times(till 10)
for given number as input*/

function printTimesTable(n) {
    for (var i = 1; i <= 10; i++) {
        console.log(n + " * " + i + " = " + (n * i));
        // document.getElementById("outputTable").innerHTML = n + " * " + i + " = " + (n * i);
    }
}

// console.log(printTimesTable(2));