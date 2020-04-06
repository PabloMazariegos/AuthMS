const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    userName: String,
    googleId: String 
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;