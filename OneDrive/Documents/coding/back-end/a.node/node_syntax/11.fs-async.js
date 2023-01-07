//fs module
const fs = require('fs')

//provide a callback - run the callback when we are done 
//when the functionality is complete the call back runs
console.log('start')
fs.readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result //the result is the first text file 
    //reads the file (utf-8 is so the code understands the text). if there is an error it will be logged. if not the result will be the txt file im trying to open
    fs.readFile('./content/second.txt','utf-8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        //bassically writes to a file called result-async.txt (which it will have to create) and the logs the text from the first and second file in there.
        fs.writeFile(
            './content/result-async.txt',
            `here are the reuslt ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)//there will be no result as it is not reading any files.
                console.log('done')
            }
        )
    })
})
console.log('starting next task')
