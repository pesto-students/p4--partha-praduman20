// program to add two numbers

function add(a,b){
    return a+b;
}

// program to calculate factorial of any given number

function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n-1);
}

// Custom memoiz function

function memoiz(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key , fn(...args));
        return cache.get(key);
    };
};

// Function to calculate the time take for the output

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const memoizAdd = memoiz(add);
const memoizFact = memoiz(factorial);

time(() => memoizAdd(100,100));
time(() => memoizAdd(100,100));

time(() => memoizFact(1000));
time(() => memoizFact(1000));
