const express = require('express')

const router = express.Router()


router.get("/", (req, res) => {
  res.send("hai");
});

router.get("/api",(req,res)=>{
    res.send("api is running")

})

module.exports = router