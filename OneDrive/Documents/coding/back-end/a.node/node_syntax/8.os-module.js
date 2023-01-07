const os = require('os')//operting system - built-in module

//info about current user
const user = os.userInfo()
console.log(user)

//returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem : os.freemem(),
    systemUptime: os.uptime()
}
console.log(currentOS)
