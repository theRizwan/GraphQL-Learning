import {quotes,users} from "./fakedb.js"
import {randomBytes} from "crypto"

const resolvers = {
    Query:{
        users : () => users,
        user: (_,{id}) => users.find(ur => ur.id==id),
        quotes : () => quotes,
        quote: (_,{by}) => quotes.find(q=> q.by==by)
    },
    User:{
        quotes: (ur) => quotes.filter((quotes)=>quotes.by==ur.id)
    },
    Mutation:{
        signupUserDummy: (_,{user}) => {
            const id = randomBytes(5).toString("hex");
            users.push({
                id,
                ...user
            })
            return users.find( ur => ur.id==id)
        }
    }
}

export default resolvers