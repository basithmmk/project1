const os = require('os')


const user =os.userInfo()
console.log(user)

console.log(`the system uptime is ${os.uptime()}seconds`)


const currentos ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    fremen:os.freemem(),

}
console.log(currentos)