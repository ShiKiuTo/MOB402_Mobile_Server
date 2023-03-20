const fs = require('fs');
let data = ' \nthis is data that i want add to my document!'

fs.appendFile('MyDocument.txt',data,(err) =>{
    if(err) throw err;
    console.log('append file successfully!');
})