import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./types.js";
import {resolver} from "./resolver.js";

const server = new ApolloServer({typeDefs,resolvers:resolver});

const {url} = await startStandaloneServer(server,{
    listen:{
        port: 4000,
    }
})
// (function(){
//     console.log(`server is running on ${url}`);
// })
console.log(url)