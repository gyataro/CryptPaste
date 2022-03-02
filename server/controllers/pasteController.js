const Paste = require("../models/pasteModel");

exports.getAllPastes = async (req, res, next) => {
    try {
        const pastes = await Paste.find();

        res.status(200).json({
            status: 'success',
            data: pastes
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Bad request: ${err}`
        });
    }
};

exports.getOnePaste = async (req, res, next) => {
    try {
        const paste = await Paste.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: paste
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Bad request: ${err}`
        });
    }
};

exports.createPaste = async (req, res, next) => {
    try {
        const paste = await Paste.create(req.body)

        res.status(200).json({
            status: 'success',
            data: paste
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Bad request: ${err}`
        });
    }
};

exports.updatePaste = async (req, res, next) => {
    try {
        const paste = await Paste.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: paste
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Bad request: ${err}`
        });
    }
};

exports.deletePaste = async (req, res, next) => {
    try {
        const paste = await Paste.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success'
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `Bad request: ${err}`
        });
    }
};