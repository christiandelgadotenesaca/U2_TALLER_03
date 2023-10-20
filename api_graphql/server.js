const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const config = require('./config')
const controller = require('./components/Cliente/controller')
const db = require('./db')

db( config.DB_URL )

let schema = buildSchema(`
    type Cliente {
        id: String
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }
`)

let root = {
    clientes: () => {
        return controller.get_all_clientes();
    },
    cliente: ({ id }) => {
        return controller.get_cliente(id);
    },
    addCliente: ({ nombre, telefono }) => {
        return controller.add_cliente(nombre, telefono)
    },
};

let app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`)
});