const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports.setup= async ()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("[MongoDB] - conexión exitosa con el servidor")
    })

    mongoose.connection.on('error', (err)=>{
        console.log("[MongoDB] - error en la conexión con el servidor, revise logs")
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log("[MongoDB] - cerrando las conexiones abiertas con el servidor")
    })

    await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}



