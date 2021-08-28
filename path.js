const path=require('path');
console.log(path.sep)

const filepath = path.join('/cont','sub con','test.txt')
console.log(filepath)
const base = path.basename(filepath)
console.log(base)
const a =path.resolve(__dirname,'cont','sub con','test.txt')
console.log(a)