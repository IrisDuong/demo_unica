const crypto = require("crypto-js");
const config = require("config");
const SECRET_KEY = config.get("secret_key");
function cryptoEncryptPwd(password){
    var newPasswd = crypto.AES.encrypt(password, SECRET_KEY).toString();
    console.log("--------- new hased password",newPasswd);
    return newPasswd;
}

function cryptoDecryptPwd(pwd1){
    var byte = crypto.AES.decrypt(pwd1,SECRET_KEY);
    var descryptedPwd = byte.toString(crypto.enc.Utf8);
    console.log("------- descrypted password",descryptedPwd);
    return descryptedPwd;
}
// const bcrypt = require("bcrypt");

// function hashPassword(passwd){
//     var salt = config.get("salt");
//     var saltRounds = bcrypt.genSaltSync(salt);
//     var hashedPwd = bcrypt.hashSync(passwd,saltRounds);
//     return hashedPwd;
// }

// function comparePassword(password,hashedPassword){
//     return bcrypt.compareSync(password,hashedPassword);
    
// }

module.exports = {
    cryptoEncryptPwd : cryptoEncryptPwd,
    cryptoDecryptPwd : cryptoDecryptPwd
}