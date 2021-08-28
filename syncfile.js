const {readFileSync,writeFileSync} =require('fs')
console.log('start')
const first =readFileSync('./cont/sub con/sync.txt','utf8')
const second =readFileSync('./cont/sub con/test.txt','utf8')
writeFileSync('./cont/basith.txt',`result:${first},${second}`,{
    flag:'a'
})
console.log('done with this task')
console.log('starting the next one')