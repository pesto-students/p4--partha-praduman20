 function range1(upperLimit){
    return new Promise((res) => {
        const arr=[];
        for(let i =1 ;i<=upperLimit ;i++){
            arr.push(i);
        }
        res(arr);
    })
}

async function asyncCall(){
    const result = await range1(10);
    console.log(result);
}

asyncCall();

function * range2(upperLimit){
    for(let i=1 ; i<=upperLimit ;i++){
        yield i;
    }
}

for(const el of range2(10)){
    console.log(el);
}