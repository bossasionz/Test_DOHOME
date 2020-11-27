function factorial(n) {
    // this if for press 0!
    if (n == 0) {
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))