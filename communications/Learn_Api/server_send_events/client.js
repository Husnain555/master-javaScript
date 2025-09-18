// const EventSource = require("eventsource");
// EventSource("http://localhost:3000");
// EventSource.onmessage = (msg) => {
//     console.log(msg);
// }

// obove is wrong implementation we can use for quick lookup browser console and use like this

let see = new EventSource("http://localhost:3000/stream")
see.onmessage = (event) =>{
    console.log(event.data)
}