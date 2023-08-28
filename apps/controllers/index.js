const router = require("express").Router();

router.use("/admin",require(__dirname + "/adminController"));
router.use("/blog",require(__dirname + "/blogController"));
router.use("/user",require(__dirname + "/userController"));
router.use("/auth",require(__dirname  + "/authController"));
router.use("/chat",require(__dirname + "/chatController"));
router.get("/",(req,res)=>{
    res.render("Home")
});

module.exports = router;