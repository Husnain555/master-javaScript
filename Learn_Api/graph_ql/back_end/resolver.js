import {usersData} from "./data.js";

export const resolver = {
    Query: {
        getUsers: ()=>{
            return usersData
        },
        getUserById:(parent,args)=>{
            return usersData.find(user=>user.id === args.id)
        }
    },
    Mutation:{
        createUser:async (parent,args,context)=>{
            const {username,email}= args
            const newUser = {
                id:(usersData.length+1).toString(),
                username,
                email
            }
            usersData.push(newUser)
        }
    }
}