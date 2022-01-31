import {ApolloServer,gql} from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import {quotes,users} from "./fakedb.js"

const typeDefs = gql`
type Query{
    users : [User]
    quotes: [quotes]

}
type User{
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
}
type quotes{
    name:String
    by:String
}
`
const resolvers = {
    Query:{
        users : () => users,
        quotes : () => quotes
    }
}

const server = new ApolloServer({
    typeDefs,resolvers,plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => console.log(`Server Started at ${url}`))


