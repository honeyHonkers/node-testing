//fs module
const fs = require('fs')

const first = fs.readFileSync('./content/first.txt','utf-8')//utf-8 ius how the character are printed
const second = fs.readFileSync('./content/second.txt','utf-8')//utf-8 ius how the character are printed
console.log(first)
console.log(second)

//file name -- if the file is not there node will create it ||  if it is there it will be overwritten
//content -- whats going to be written in the code
console.log('start')
fs.writeFileSync(
    './content/result-sync.txt', 
    `this is the result of both files : ${first} - ${second}`,
    { flag: 'a' }//'a' = append || appends the 
)
console.log('done with this task')
console.log('starting the next one')