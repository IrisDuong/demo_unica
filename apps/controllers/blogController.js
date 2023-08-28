const router = require("express").Router();
const blogDao = require("../dao/blog/blogDao");

var commonData = {
    error:{
        title:""
    },
    message:"",
}
router.get("/",(req,res)=>{
    
    // var listPosts = [
    //     {id:1,title:"Lập trình Android",createdDate:"15-02-2009",author:"TTTH Nhất Nghệ"},
    //     {id:2,title:"Java Thực chiến",createdDate:"30-11-2005",author:"Phạm Văn Tính"},
    //     {id:3,title:"Flutter in advanced",createdDate:"25-05-2015",author:"Justin Evans"},
    //     {id:4,title:"Cấu Trúc Dữ Liệu Và Giải Thuật C++",createdDate:"31-12-2010",author:"Lê Nhật Tùng"},
    // ]
    var listPosts = [];
    blogDao.getAllPosts()
    .then(result=>{
        commonData.message = "success";
        listPosts = [].concat(result)
        res.render("blog/Blog",{commonData:commonData,listPosts:listPosts,listBreadcrumbs:["Blog Management","List Posts"]})
    }).catch(error=>{
        commonData.message = "failed";
        res.render("blog/Blog",{commonData:commonData,listPosts:[],listBreadcrumbs:["Blog Management","List Posts"]})
    })
});
router.get("/newPost",(req,res)=>{
    commonData.message = "success"
    res.render("blog/PostCreation",{commonData:commonData,post:{},listBreadcrumbs:["Blog Management","New Post"]})
});

router.post("/newPost",(req,res)=>{
    var isValid = true;
    commonData.message = "success";
    var param = req.body;
    if(param.title.trim().length == 0){
        commonData.error.title = "Title is required";
        isValid = false;
    }else{
        isValid = true;
        commonData.error.title = "";
    }
    console.log("isValid",isValid);
    if(isValid){
        var post = {...param};
        var now = new Date();
        post.created_Date = now;
        post.updated_Date = now;
        var newPost = blogDao.createNewPost(post);
        if(newPost){
            newPost.then(result=>{
                commonData.message = "success"
                res.redirect("/unica/blog");
            })
            .catch(error=> {
                commonData.message = "failed"
                res.render("blog/PostCreation",{commonData:commonData,post:post,listBreadcrumbs:["Blog Management","List Posts"]});
            })
        }else{
            commonData.message = "failed"
            res.render("blog/PostCreation",{commonData:commonData,post:post,listBreadcrumbs:["Blog Management","List Posts"]})
        }
    }else{
        res.render("blog/PostCreation",{commonData:commonData,post:param,listBreadcrumbs:["Blog Management","List Posts"]})
    }
})
module.exports = router;