const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("chat/Chat",{listBreadcrumbs:["Chat"]});
});

module.exports = router