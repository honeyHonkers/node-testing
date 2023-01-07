const path = require('path')

console.log(path.sep)//returns platform specific seperator (idk)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
const baseName = path.basename(filePath)//gets the last file in the object
console.log(baseName)

const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')//directory name 
console.log(absolute)