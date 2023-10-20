const storage = require('./storage')

function get_cliente( id ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( id ) )
    })
}

function add_cliente( nombre, telefono ) {
    return new Promise((resolve, reject) => {
        resolve(storage.add(nombre, telefono))        
    })
}

function get_all_clientes(){
    return new Promise((resolve, reject) => {
        resolve(storage.get_all( ) )
    })
}

module.exports = {
    get_cliente,
    add_cliente,
    get_all_clientes
}