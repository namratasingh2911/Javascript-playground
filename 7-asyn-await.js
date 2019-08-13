const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        if(a<0 || b<0){
            reject('Numbers should be positive');
        }
      resolve(a+b)
    })
}

const doWork = async () =>{
    const sum = await add(1,100);
    const sum1 = await add(sum,50);
    const sum2 = await add(sum1,-3);

    return sum2

}

doWork().then((result)=>{
 console.log('Result',result);
}).catch((e)=>{
console.log('e',e);
})