module.exports.jsonRespuesta=(...args)=>{
    return({
        statusCode: args[0],
        endpoint: args[1],
        message: args[2],
        data: args[3]
    })
}