let net = require("net");
let server = net.createServer();

// if any client application hit the request using ip address and port number then below method get called
server.on("connection",(socket)=>{
    console.log("client connected succesfully..");

    // this code is use to recieve the value from client node
    socket.on("data",(msg)=>{
        console.log(msg);    // display data in buffer format
        console.log(msg.toString());
    })

    socket.write("Hello client, you connected chat application successfully.");

    // This code execute again and again whenever we hit enter key.
    // And send data to client
    obj.on("line",(input)=>{
        socket.write(`From Server : ${input}`);
    })
})

server.listen(3000,()=>console.log("Server is running on 3000"));