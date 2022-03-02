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
        "makefile",
        "markdown",
        "objectivec",
        "php",
        "perl",
        "plaintext",
        "python",
        "python-repl",
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
    SUCCESS: "success",
    FAIL: "fail",
    ERROR: "error"
}

const error = {
    VALIDATION: "ValidationError",
    NOT_FOUND: "NotFoundError"
}

module.exports = {
    paste,
    api,
    error
}