const paste = {
    PASTE_FORMATS: [
        "bash",
        "c",
        "csharp",
        "cpp",
        "css",
        "diff",
        "go",
        "html",
        "json",
        "java",
        "javascript",
        "kotlin",
        "less",
        "lua",
        "markdown",
        "objectivec",
        "php",
        "perl",
        "plaintext",
        "python",
        "r",
        "ruby",
        "rust",
        "scss",
        "sql",
        "shell",
        "swift",
        "toml",
        "typescript",
        "vb",
        "xml",
        "yaml"
    ],

    PASTE_VISIBILITY: [
        "public",
        "private",
        "unlisted"
    ]
}

const api = {
    status: {
        SUCCESS: "success",
        FAIL: "fail",
        ERROR: "error"
    },

    error: {
        VALIDATION: "ValidationError",
        NOT_FOUND : "NotFoundError",
        FORBIDDEN: "ForbiddenError",
        FORBIDDEN_PASTE: "ForbiddenPasteError"
    }
}

module.exports = {
    paste,
    api
}