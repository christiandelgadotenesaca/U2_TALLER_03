const model = require('./model')

function get_cliente( id ) {
    let filtro = {}
    if (id) {
        filtro = { id: id }
    }
    const objeto = model.find( filtro )
    return objeto
}

function get_all_clientes(){
    const objeto = model.find();
    return objeto;
}

function add_cliente( nombre, telefono ) {
    const objeto = new model({nombre, telefono })
    objeto.save()
    return objeto
}

module.exports = {
    add: add_cliente,
    get: get_cliente,
    get_all: get_all_clientes
}