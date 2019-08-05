function countNumbers(arr) {
    arr.forEach(row => {
        console.log(noDuplicates(row[0], row[1]))
    })

}

function noDuplicates(lower, upper) {
    let counter = 0;

    for (let i = lower; i <= upper; i++) {
        let num = i;
        let numbers = {};
        // console.log("numbers", numbers)
        console.log("i", i)
        while (num > 0) {
            console.log("num", num)
            if (numbers[num % 10] === true) {
                break;
            }
            numbers[num % 10] = true;
            console.log("numbers", numbers)

            num = Math.floor(num / 10);
            console.log("after_division", num)
        }

        if (num === 0) {
            counter += 1;
            console.log("counter", counter)
            // console.log("counter", counter)
            // console.log("i", i)
        }
    }
    return counter;
}

console.log(countNumbers([[1, 20], [9, 19]]));