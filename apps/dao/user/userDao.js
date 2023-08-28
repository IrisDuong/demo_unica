const database = require("../../common/database");
const conn = database.getConnection();
const Q = require("q");
var UserEntity = require("../../entity/user/userEntity");
function createUser(userVo){

    var defer = Q.defer();
    //Created mapped param from form
    var param = new UserEntity();
    param.convertFromVo(userVo);

    if(param){
        var query = conn.query("INSERT INTO users SET ? ",param,(err,result)=>{
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        })
        return defer.promise;
    }
    return false;
}
async function getListUsers(){
    var defer = Q.defer();
    conn.query("SELECT * FROM users",(err,data)=>{
        if(err){
            defer.reject(err);
        }else{
            var result = data.map(e=> {
                var userEntity = new UserEntity();
                userEntity.mappResutFromDB(e)
                return userEntity;
            })
            console.log("list users result",result);
            defer.resolve(result)
        }
    });
    return defer.promise;
    // var result = await conn.query("SELECT * FROM users");
    // return result;
}

function getUserByEmail(email){
    var defer = Q.defer();
    if(email){
        var query = conn.query("SELECT u.* FROM users u WHERE ? ",{email:email},(err,result)=>{
            console.log("result by email",result);
            if(err){
                defer.reject(err);
            }else{
                var userEntity = new UserEntity();
                if(result[0]) userEntity.mappResutFromDB(result[0]);

                defer.resolve(userEntity);
            }
        });
        return defer.promise;
    }
    return false;
}
module.exports = {
    createUser : createUser,
    getListUsers  :getListUsers,
    getUserByEmail : getUserByEmail
}