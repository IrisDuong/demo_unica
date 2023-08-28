const router = require("express").Router();

router.get("/",(req,res)=>{
   
    var message = "Welcome Admin page";
    res.render("admin/Admin",{"message":message})
});

module.exports = router;