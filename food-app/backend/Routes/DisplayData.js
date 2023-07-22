const express = require('express');


const router = express.Router()


router.post('/fooddata',(req,res)=>{
    try{
        console.log(global.food_items)
        res.send([global.food_items, global.foodCategory])
    }catch(error){
        console.error("Server error");
        res.send("server error");
    }
})

module.exports = router;