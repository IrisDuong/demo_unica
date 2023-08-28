const helper = require("../helpers/helper");
const userDao = require("../dao/user/userDao");
const userService = require("../services/user/userService");
const router = require("express").Router();
var commonData = {
    error:{
        email:"",
        password:"",
        message:""
    }
};
var param = {
    email:"",
    password:"",
};

router.get("/signin",(req,res)=>{
    res.render("auth/Signin",{commonData:commonData,param:param,listBreadcrumbs:["Login"]})
})
router.post("/signin",async (req,res,next)=>{
    var param = req.body;
    var user = {
        email : "",
        password:""
    }

    if(param.email.trim().length == 0){
        commonData.error.email = "Email is required";
    }else{
        commonData.error.email = "";
    }

    if(param.password.trim().length == 0){
        commonData.error.password = "Password is required";
    }else{
        commonData.error.password = "";
    }
    if(param.email.trim().length > 0 && param.password.trim().length > 0){
        var data = await userService.getUserByEmail(param.email);
        if(data){
                var checkPwd = helper.cryptoDecryptPwd(data.password);
                if((checkPwd && checkPwd.length > 0) && checkPwd == param.password){
                    commonData.error.message = "";
                    req.session.loggedUser = data;
                    console.log("req.session.loggedUser",req.session.loggedUser);
                    res.redirect("/unica")
                }else{
                    commonData.error.message = "Password not matched";
                }
            // })
        }else{
            commonData.error.message = "User not exists";
        }
        
    }
    res.render("auth/Signin",{commonData:commonData,param:param,listBreadcrumbs:[]})
});
router.get("/signout",(req,res)=>{
    if(req.session.loggedUser){
        req.session.destroy();
        res.redirect("/unica")
    }
})
module.exports = router;