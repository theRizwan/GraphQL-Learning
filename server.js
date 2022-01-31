import {ApolloServer,gql} from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import {quotes,users} from "./fakedb.js"

const typeDefs = gql`
type Query{
    users : [User]
    user(id:ID!): User
    quotes: [Quotes]
    quote(by:ID!): Quotes
}
type User{
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quotes]
}
type Quotes{
    name:String
    by:String
}
`
const resolvers = {
    Query:{
        users : () => users,
        user: (_,{id}) => users.find(ur => ur.id==id),
        quotes : () => quotes,
        quote: (_,{by}) => quotes.find(q=> q.by==by)
    },
    User:{
        quotes: (ur) => quotes.filter((quotes)=>quotes.by==ur.id)
    }
}

const server = new ApolloServer({
    typeDefs,resolvers,plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => console.log(`Server Started at ${url}`))


