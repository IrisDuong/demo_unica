const userDao = require("../../dao/user/userDao");
const UserVo = require("../../dto/user/userVo");
var UserEntity = require("../../entity/user/userEntity");

const getAllUsers = async ()=>{
  var listUsers = [];
  let result = await  userDao.getListUsers();
  if(result && result.length > 0){
    result.map(e=>{
        let userVo = new UserVo();
        userVo.mapperData(e)
        userVo.setFullName(userVo.getFirstName() + " "+userVo.getLastName());
        listUsers.push(userVo);
    })
  }
  return listUsers;
}

const createUser = async (userVo)=>{
    var result = await userDao.createUser(userVo);
    return result;
}

const getUserByEmail = async (email)=>{
  let result = await userDao.getUserByEmail(email);
  if(result){
    let userVo = new UserVo();
    userVo.mapperData(result);
    userVo.setFullName(userVo.getFirstName() + " "+userVo.getLastName());
    return userVo;
  }
  return null;
}
module.exports = {
    getAllUsers : getAllUsers,
    createUser : createUser,
    getUserByEmail : getUserByEmail
}