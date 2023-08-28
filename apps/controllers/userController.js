const router = require("express").Router();
const userDao = require("../dao/user/userDao");
const UserVo = require("../dto/user/userVo");
const helper = require("../helpers/helper");
const userService = require("../services/user/userService");
var commonData = {
    error:{
        email:"",
        password:"",
        message:""
    }
};
router.get("/",async (req,res)=>{
    var listUsers = await userService.getAllUsers()
    res.render("user/User",{listUsers:listUsers,listBreadcrumbs:["User Management","List Users"]})
})

router.get("/signup",(req,res)=>{
    res.render("user/Signup",{commonData:commonData,user:{},listBreadcrumbs:["User Management","New Employee"]});
})

router.post("/signup",async (req,res,next)=>{
    var param = req.body;
    var email = "";
    var password = "";
    var isValidForm = true;
    if(param){
        if(param.email.trim().length == 0){
            commonData.error.email = "Email is required";
            isValidForm = false;
        }else{

        }
        if(!param.password || (param.password && param.password.trim().length == 0)){
            commonData.error.password = "Password is required";
            isValidForm = false;
        }else{
            isValidForm = true;
        }
        if(param.password != param.rePassword && param.password.trim().length != 0){
            commonData.error.password = "Password is not matched";
            isValidForm = false;
        }else{
            isValidForm = true;
        }
    }
    //create new param to database
    if(isValidForm){
        param.password = helper.cryptoEncryptPwd(param.password)
        var now = new Date();
        var userVo = new UserVo();
        userVo.setEmail(param.email);
        userVo.setPassword(param.password);
        userVo.setFirstName(param.firstName);
        userVo.setLastName(param.lastName);
        userVo.setCreatedDate(now);
        userVo.setUpdatedDate(now);
    
        var result = await userService.createUser(userVo);
        if(!result){
            commonData.error.message = "Could not create new user";
            res.render("user/Signup",{commonData:commonData,user:param,listBreadcrumbs:["User Management","New Employee"]});
        }else{
          res.redirect("/unica/user");
        }
    }else{
        res.render("user/Signup",{commonData:commonData,user:param,listBreadcrumbs:["User Management","New Employee"]});
    }
    
})
module.exports = router;