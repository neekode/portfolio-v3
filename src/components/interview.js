const fizzBuzz = () => {
    let num = 100;
    for (let i = 0; i <= num; i++) {
        if (num % 5 && num % 3) {
            console.log("fizzbuzz");
        }
        if (num % 3) {
            console.log("fizz");
        }
        if (num % 5) {
            console.log("buzz");
        }
    }
}