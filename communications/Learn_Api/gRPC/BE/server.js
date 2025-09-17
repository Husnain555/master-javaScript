import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDef = protoLoader.loadSync("todo.proto",{});

const grpcObject = grpc.loadPackageDefinition(packageDef)
const todoPackage = grpcObject.todoPackage;
const server = new grpc.Server();
server.addService(todoPackage.Todo.service,{
  createTodo,
   readTodos,
    readTodoStreams
})

server.bindAsync("0.0.0.0:4000",grpc.ServerCredentials.createInsecure(),(err,port)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(`Server running on port ${port}`);
    server.start();

});
const Todos = []
function createTodo(call, callback) {
    console.log("createTodo called:", call.request);
    const newTodo = {
        id: Todos.length + 1,
        text: call.request.text,
    };
    Todos.push(newTodo);
    callback(null, newTodo);
}
function readTodos(call, callback) {
    console.log("readTodos called");

    callback(null, { items: Todos });
}
function readTodoStreams(call, callback) {
    Todos.forEach(t=> call.write(t));
    call.end()
}

