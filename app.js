const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const expressSession = require("express-session");
const socketIO = require("socket.io");
const app = express();
require("dotenv").config();

/** App  setting*/
app.set("view engine","ejs");
app.set("views",__dirname + "/apps/views");
app.use("/static",express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.set("trust proxy",1);
app.use(expressSession({
    secret : config.get("secret_key"),
    resave : true,
    saveUninitialized : true,
    // cookie:{secure:true}
}));
app.use((req,res,next)=>{
    var loggedUser = req.session.loggedUser;
    if(loggedUser){
        res.locals.loggedUser = loggedUser;
    }
    next();
})
/** controllers */
app.use("/unica",require(__dirname + "/apps/controllers"));

/** Start server */
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
// const PORT = config.get("server.port");
// const HOST = config.get("server.host")

var server = app.listen(PORT,HOST,()=>{
    console.log(`Unica server is running at ${PORT}`);
});
var io = socketIO(server,{
    cors:{
        origin:"http://localhost",
        methods:["GET","POST"],
        credentials:true,
        transports:['websocket','polling']
    },
    allowEIO3:true
});
var socket = require("./apps/common/soketcontrol")(io);