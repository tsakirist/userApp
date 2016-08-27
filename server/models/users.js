const restful = require('node-restful');
const mongoose = restful.mongoose;
// const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // hash: String,
    // salt: String
});

// userSchema.methods.setPassword = function(password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     console.log(this.salt);
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
//     console.log(this.hash);
// };

module.exports =  restful.model('users', userSchema);
