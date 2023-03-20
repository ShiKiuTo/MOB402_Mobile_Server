const fs = require('fs');

fs.unlink('MyData.txt', (err) => {
    if(err) throw err;
    console.log('delete file');
})