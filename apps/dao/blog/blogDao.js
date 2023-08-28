const database = require("../../common/database");
const conn = database.getConnection();
const Q = require("q");

function getAllPosts(){
    var defer = Q.defer();
    conn.query("SELECT p.* FROM post p",(error,data)=>{
        if(error){
            defer.reject(error)
        }else{
            defer.resolve(data)
        }
    });
    return defer.promise;
}

function createNewPost(post){
    var defer = Q.defer();
    if(post){
        console.log("post create",post);
        conn.query("INSERT INTO post SET ?",post,(error,data)=>{
            if(error){
                defer.reject(error);
            }else{
                defer.resolve(data)
            }
        });
        return defer.promise;
    }
    return false
}

module.exports = {
    getAllPosts : getAllPosts,
    createNewPost  :createNewPost
}