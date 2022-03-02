const mongoose = require("mongoose");
const constants = require("../loaders/constants");

const pasteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post must have title."]
    },
    format: {
        type: String,
        lowercase: true,
        enum: { 
            values: constants.paste.PASTE_FORMATS, 
            message: "Post must have valid format."
        },
        required: [true, "Post must have a format."]
    },
    views: {
        type: Number,
        default: 0
    },
    secret: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        required: [true, "Paste must have content."]
    },
    visibility: {
        type: String,
        lowercase: true,
        enum: { 
            values: constants.paste.PASTE_VISIBILITY, 
            message: "Post must have a valid visibility setting."
        },
        default: constants.paste.PASTE_VISIBILITY[0]
    },
    isBurned: {
        type: Boolean,
        default: false
    },
    expiresAt: {
        type: Date,
        expires: 0
    }
}, { timestamps: true });

const Paste = mongoose.model("Paste", pasteSchema);
module.exports = Paste;