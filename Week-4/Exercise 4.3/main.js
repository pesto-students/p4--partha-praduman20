let fib = {
  _item: 10,
  [Symbol.iterator]: function(){
    let i = 1;
    let old = 0,current = 0;
    return {
      next: () => {
        if (i++ <= this._item) {
          [old, current] = [current, (old + current) || 1];
          return {
            value: old,
            done: false,
          };
        } 
        else {
          return { done: true };
        }
      },
    };
  },
};

for(let el of fib){
    console.log(el);
}
