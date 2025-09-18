const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/stream", (req, res) => {
    res.header("content-type", "text/event-stream");
    res.setHeader("Access-Control-Allow-Origin", "*");

    // res.write("data: "+"Hello World!\n\n");
    send(res);
})
let i = 0
function send(res){
    res.write(`event: notification\n`);

    res.write("data: " + `${++i} Hello World!\n\n";`)
    console.log(i,'i')
    setTimeout(()=> send(res),1000)
}