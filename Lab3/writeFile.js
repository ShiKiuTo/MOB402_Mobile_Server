const fs = require('fs');
let data = 'this is my document whose i have created'

fs.writeFile('MyDocument.txt',data,(err) =>{
    if(err) throw err;
    console.log('write file conplete !');
})
