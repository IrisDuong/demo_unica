module.exports = (io)=>{
    var usernames = [];
    io.on("connection",(socket)=>{
        console.log("Server socket is listening client");
        socket.on("addUser",(userName)=>{
            socket.username = userName;
            usernames.push(userName);

            //notify to myself
            var data = {
                sender:"SERVER",
                message:"You have join chat room"
            };
            socket.emit("update_message",data);

            //notify to all users
            var data2 = {
                sender:"SERVER",
                message:userName + " has join chat room"
            }
            socket.broadcast.emit("update_message",data2);

            socket.on("send_message",(message)=>{
                console.log("socket.ten",socket);
                var data = {
                    sender:"You",
                    message:message
                }
                socket.emit("update_message",data);

                var data = {
                    sender:socket.username,
                    message:message
                }

                socket.broadcast.emit("update_message",data)
            })
        });;
        socket.on("disconnect",()=>{
            //delete username
            for(var i = 0; i < usernames.length;i++){
                if(usernames[i] === socket.username){
                    usernames.splice(i,1);
                }
            }
            var data = {
                sender : "SERVER",
                message : socket.username + "leave chat room"
            }
            socket.broadcast.emit("update_message",data)
        })
    });
}