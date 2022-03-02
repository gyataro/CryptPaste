const mongoose = require("mongoose");

const pasteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post must have title."]
    },
    format: {
        type: String,
        lowercase: true,
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
        default: "public"
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