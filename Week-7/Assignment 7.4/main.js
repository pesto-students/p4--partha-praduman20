function parenthesisChecker(string){
    let stack =[];
    for(let i =0;i<string.length ;i++){
        let element  = string[i];
        if(element == "(" || element == "[" || element == "{"){
            stack.push(element);
            continue;
        }
        if (stack.length == 0){
            return false;
        }
        if(element == ")" || element == "]" || element == "}"){
            stack.pop();
        }
    }
    if(stack.length === 0){
        return true;
    }
    return false;
}

let string = "([{}])";
console.log(parenthesisChecker(string));
let string2 = "([]";
console.log(parenthesisChecker(string2));