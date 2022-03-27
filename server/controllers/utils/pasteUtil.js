const bcrypt = require("bcrypt");
const logger = require("../../loaders/logger");
const constants = require("../../loaders/constants");
const Paste = require("../../models/pasteModel");
const { InternalError, NotFoundError, ForbiddenPasteError } = require("../../loaders/errors");

// Notify user of a successful paste read/update/delete.
function handleResponse(res) {
    return function(result) {
        res.status(200).json({
            status: constants.api.status.SUCCESS,
            data: result
        });
    }
}

// Notify user of successful paste creation and its location.
function handleCreated(res) {
    return function(result) {
        if (!result) throw new InternalError();

        res.status(201).location(`/paste/${result.urlId}`).json({
            status: constants.api.SUCCESS
        });
    }
}

function handleLockedPaste(req) {
    return function(result) {
        if (!result) throw new NotFoundError();

        var lockReason = {
            isBurned: Boolean(result.isBurned),
            isSecret: Boolean(result.secret)
        }

        if(lockReason.isSecret) unlockSecret(result, lockReason);
        if(lockReason.isBurned) unlockBurn(result, lockReason);

        return result;
    }

    // Check if paste is password protected. If so, user must provide a correct password to unlock it.
    function unlockSecret(result, lockReason) {
        var isSecretProvided = Boolean(req.header('Secret'));
        var isSecretCorrect  = isSecretProvided && bcrypt.compareSync(req.header('Secret'), result.secret);

        lockReason.isSecretProvided = isSecretProvided;
        lockReason.isSecretCorrect = isSecretCorrect;

        if (!isSecretProvided) throw new ForbiddenPasteError(lockReason);
        if (!isSecretCorrect) throw new ForbiddenPasteError(lockReason);
    }

    // Check if paste is burnt after reading. If so, user must provide burn confirmation request header.
    function unlockBurn(result, lockReason) {
        
        if (!req.header('Burn')) throw new ForbiddenPasteError(lockReason);

        Paste
            .findByIdAndDelete(result._id)
            .then()
            .catch(err => { throw new InternalError(err) });
    }
}

// Handle paste API errors
function handleError(res) {
    return function(err) {

        message = {};
        logger.debug(err);

        switch(err.name) {
            case constants.api.error.VALIDATION:
                for (var errName in err.errors)
                    message[errName] = err.errors[errName].message;
    
                return res.status(400).json({
                    status: constants.api.status.FAIL,
                    message: message
                });

            case constants.api.error.NOT_FOUND:
                return res.status(404).json({
                    status: constants.api.status.FAIL,
                    message: message
                });

            case constants.api.error.FORBIDDEN_PASTE:
                for (var errName in err.errors)
                    message[errName] = err.errors[errName];

                return res.status(403).json({
                    status: constants.api.status.FAIL,
                    message: message
                });

            case constants.api.error.FORBIDDEN:
                return res.status(403).json({
                    status: constants.api.status.FAIL,
                    message: message
                });

            default:
                return res.status(500).json({
                    status: constants.api.status.ERROR,
                    message: message
                });
        }
    }
}

module.exports = {
    handleResponse,
    handleCreated,
    handleLockedPaste,
    handleError
}