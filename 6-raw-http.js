const https = require('https');
const url = "https://api.darksky.net/forecast/3ae62798f55ea542119e5d804707eebe/37.8267,122.4233?units=si&lang=en";
const request = https.request(url,(response) =>{
    let data = '';

    response.on('data',(chunk) =>{
        data = data + chunk.toString();
    })

    response.on('end',() =>{
        const body = data.JSON.parse(data)
       console.log(body);
    })
})

request.on('error',(error)=>{
    console.log('An error',error);

})

request.end();