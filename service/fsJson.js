const fs = require('fs')

fs.readFile('./dataJson/goods.json', 'utf8', function(err, data){
  let newData = JSON.parse(data)
  let i = 0 
  let pushData = []
  newData.RECORDS.map(function(value, index) {
      if(value.IMAGE1 != null){
          i++
          pushData.push(value)
      }  
  })
  fs.writeFile('./dataJson/newGoods.json', JSON.stringify(pushData), function(err){
    if(err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
  });
});
