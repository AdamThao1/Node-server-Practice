// created a server without express
const http = require("http");
const port = process.env.port || 5000;
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

//add routes
const url = req.url;
if(url === "/profile"){
    res.write("<h1>Welcome to your profile!</h1>");
    res.write("<h1>You are a tech instructor for Road to Hire!</h1>");
    res.write("<h1>You are 22 years old!</h1>");

}else if(url === "/job"){
    //JSON Example
    const work = {
        address:{
            street:"Red Ventures",
            city: " Charlotte, NC",
        },
    };
    res.writeHead(200,{"content-Type": "appplication/json"})
    res.write(JSON.stringify(work));
    res.end();
}else{

    res.write("<h1>Hello ther cohort 13!</h1>")
    res.end()
}
})

.listen(port,()=> {
    console.log(`server is listening on port ${port}....`)
})