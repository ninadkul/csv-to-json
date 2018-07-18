const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson')
const csvFile = 'customer-data.csv'
var jsonString = ''

csvtojson().fromFile(csvFile).then((jsonObj)=> {
    let str = ''
    try{
    str = JSON.stringify(jsonObj)
}catch(e){
    console.log(e)
}
jsonString += str
//console.log(jsonString)
fs.writeFileSync(path.join(__dirname,'customer-data.json'),str)

})
//console.log(`${jsonString}`)
const jsonArray= csvtojson().fromFile(csvFile);



