let net = require("net");
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let client = net.createConnection(3000,"localhost",()=>{

    // This messege display on client side machine console.
    console.log("I am Client");

    // this code is use send the data to server node.
    client.write("Hello Server, I am client...");
})

// This code is use to receive the messege from server node.
client.on("data",(msg)=>{
    console.log(msg.toString())
})

// this code execute again and again whenever we hit enter key.
obj.on("line",(input)=>{
    client.write(`From client : ${input}`);
})