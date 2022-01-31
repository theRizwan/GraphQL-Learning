import {ApolloServer,gql} from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import {quotes,users} from "./fakedb.js"

const typeDefs = gql`
type Query{
    quotes: [quotes]

}
type quotes{
    name:String
    by:String
}
`
const resolvers = {
    Query:{

        quotes : () => quotes
    }
}

const server = new ApolloServer({
    typeDefs,resolvers,plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => console.log(`Server Started at ${url}`))


