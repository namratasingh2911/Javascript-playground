const doWorkCallback = (callback)=>{
    setTimeout(()=>{
      callback('This is my error!!',undefined)
    },2000)

}

doWorkCallback((error,data)=>{
    if(error){
        return console.log(error);
    }

    console.log(data);
})

