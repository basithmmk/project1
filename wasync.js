const {readFile,writeFile}=require('fs')
console.log('start');
readFile('./cont/sub con/test.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }    


    const first=result;
    readFile('./cont/sub con/sync.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err)
            return
            
        }
    
      
    
  const second=result
    writeFile('./cont/sub con/javith.txt', `result:${first},${second}`,(err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log('done with this file ')
        })
    })
    })
    console.log('start next task ')