const fs = require('fs');

fs.rename('MyDocument.txt','MyData.txt', (err) =>{
    if(err) throw err;
    console.log('new name!');
})