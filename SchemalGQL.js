
import {gql} from "apollo-server"

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

type Mutation{
    signupUserDummy(user:UserInput!): User
}

input UserInput{
    firstName:String
    lastName: String
    email:String
    password:String
}
`

export default typeDefs