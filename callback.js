setTimeout(() =>{
console.log("2 seconds are up");
},2000)

const names =['Namrata','Moe','Doen'];

const shortnames = names.filter((name)=>{
return (name);
})

console.log(shortnames);

const geoCode = (address,callback) =>{
    setTimeout(()=>{
        const data ={
            latitude : 0,
         longitude : 0
         }
         
         callback(data);
    },2000)

}

(geoCode('India',(data)=>{
console.log(data);
}));

const add = (a,b,cb) => {
    setTimeout(()=>{
     const sum = a+b;
     cb(sum);
    },2000)
   

}

add(4,3,(sum)=>{
console.log(sum);
})

