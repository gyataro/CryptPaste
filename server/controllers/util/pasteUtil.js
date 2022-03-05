const bcrypt = require("bcrypt");
const Paste = require("../../models/pasteModel");
const constants = require("../../loaders/constants");

// Check if paste is burnt after reading. If so, delete paste.
function handleBurn() {
    return function(result) {
        if (result && result.isBurned) {
            Paste
                .findByIdAndDelete(result._id)
                .then()
                .catch(err => { throw new Error(err) });
        }
        return result;
    }
}

// Check if paste is password protected. If so, compare passwords.
function handleSecret(req) {
    return function(result) {
        if (result && result.secret && !bcrypt.compareSync(req.body.secret, result.secret)) {
            throw { name: constants.error.FORBIDDEN };
        }
        return result;
    }
}

module.exports = {
    handleBurn,
    handleSecret
}