const Paste = require("../models/pasteModel");
const constants = require("../loaders/constants");

function handleResponse(res) {
    return function(result) {
        // Handle empty responses
        if (!result) throw { name: constants.error.NOT_FOUND };

        // Handle good response
        res.status(200).json({
            status: constants.api.SUCCESS,
            data: result
        });
    }
}

function handleError(res) {
    return function(err) {
        message = {};

        switch(err.name) {
            case constants.error.VALIDATION:
                for (var errName in err.errors)
                    message[errName] = err.errors[errName].message;
    
                return res.status(400).json({
                    status: constants.api.FAIL,
                    message: message
                });

            case constants.error.NOT_FOUND:
                return res.status(404).json({
                    status: constants.api.FAIL,
                    message: message
                });

            default:
                return res.status(500).json({
                    status: constants.api.ERROR,
                    message: message
                });
        }
    }
}

exports.getAllPastes = async (req, res, next) => {
    Paste
        .find()
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.getOnePaste = async (req, res, next) => {
    Paste
        .findByIdAndUpdate(req.params.id, {$inc: {views: 1}})
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.createPaste = async (req, res, next) => {
    Paste
        .create(req.body)
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.updatePaste = async (req, res, next) => {
    Paste
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.deletePaste = async (req, res, next) => {
    Paste
        .findByIdAndDelete(req.params.id)
        .then(handleResponse(res))
        .catch(handleError(res));
};