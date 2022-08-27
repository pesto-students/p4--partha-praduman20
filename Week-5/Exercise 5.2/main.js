function checkVowel(letter){
    const vowels = ["a", "e", "i", "o", "u"];
    if(vowels.includes(letter)){
        return true;
    }
}

function vowelCount(string){
    const vowelMap = new Map();
    for(let i =0 ; i<string.length;i++){
        let char = string.charAt(i);
        let lowerChar = char.toLowerCase();
        if(checkVowel(lowerChar)){
            if(vowelMap.has(lowerChar)){
                vowelMap.set(lowerChar , vowelMap.get(lowerChar)+1 );
            }
            else{
                vowelMap.set(lowerChar , 1);
            }
        }
    }
    return vowelMap;
}

const check = vowelCount("Praduman");
console.log(check);