const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson')
const csvFile = 'customer-data.csv'


csvtojson().fromFile(csvFile).then((jsonObj)=> {
    
    let str = ''
    str = JSON.stringify(jsonObj)
    console.log(str)
    fs.writeFileSync(path.join(__dirname,'customer-data.json'),str)

})

csvtojson().fromFile(csvFile);



