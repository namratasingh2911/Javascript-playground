var fs = require('fs');

const data = fs.readFileSync('1-json.json')
console.log(data.toString());

const javaData=JSON.parse(data.toString());
console.log(javaData);

javaData.name = 'Monika';
javaData.age = 23;

JavaJson = JSON.stringify(javaData);
fs.writeFileSync('1-json.json',JavaJson);



// const book ={
//     title : 'My Book',
//     author : 'Namrata'
// }

// const jsonBook = JSON.stringify(book);
// console.log(jsonBook);

// const javaScriptBook= JSON.parse(jsonBook);

// console.log(javaScriptBook);