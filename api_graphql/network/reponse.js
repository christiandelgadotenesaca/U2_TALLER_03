exports.success = function(res, data, estado) {
    res.status(estado).send( {error:'', body:data } )
}

exports.error = function(res, data, estado) {
    res.status(estado).send( {error:data, body:'' } )
}