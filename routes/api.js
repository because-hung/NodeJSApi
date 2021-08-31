var express = require('express');
var router = express.Router();

/* GET home page. */

// '/'
// '/api/'


// data
const data = [
    {
        id: 1,
        title: 'product'
    }
]

// get methods

//http://localhost:3000/api/products
router.get('/products', function(req, res, next) {
    // res.status(200); 狀態碼 //方便前端辨識用的 
    res.send({
    success: true,  
    data
  }).end();

  //res.end()
  //表示送完這個訊息就沒事了 (讓伺服器跟瀏覽器知道結束了)
});

// post methods

router.post('/products', function(req, res) {
   const product = req.body  //從請求req 把資料帶出來 (位置在body裡面)
   console.log(product)
   data.push({
       ...product,
       id: new Date().getTime(), //建議加id //id 通常由後端去加
   });
   console.log(data);

   res.send({
       success: true,
       product
   });
   res.end();

});

//delete methods 


//api/product/12345 (隨用戶傳遞id 動態)
router.delete('/products/:id', function(req, res) {

    const id = req.params.id
    console.log(id)

    data.forEach((item, key)=>{
        if(item.id == id){  
           data.splice(key, 1)
        }
    })
  
    res.send({
        success: true,
        data
    });
    res.end();
 
 });


module.exports = router;
  