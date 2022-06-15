const fs=require('fs')
const { json } = require('stream/consumers')

const dataBuffer=fs.readFileSync('app.json')
const dataJSON=dataBuffer.toString()
const user=JSON.parse(dataJSON)
user.name='Gaurav'
user.age=20
const userJSON= JSON.stringify(user)
fs.writeFileSync('app.json',userJSON)