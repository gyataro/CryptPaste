const placeholder = {
    title: "Untitled",
    secret: "********"
}

const expiration = [
    { value: 0, label: "Never"},
    { value: 600000, label: "10 Minutes" },
    { value: 3600000, label: "1 Hour" },
    { value: 86400000, label: "1 Day" },
    { value: 604800000, label: "1 Week" },
    { value: 1209600000, label: "2 Weeks" },
    { value: 2629743000, label: "1 Month" },
    { value: 15778458000, label: "6 Months" },
    { value: 31556926000, label: "1 Year" }
]

const visibility = [
    { value: "public", label: "Public" },
    { value: "unlisted", label: "Unlisted" },
    { value: "private", label: "Private" }
]

const syntax = [
    { value: "bash", label: "Bash" },
    { value: "c", label: "C" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    { value: "css", label: "CSS" },
    { value: "diff", label: "Diff" },
    { value: "go", label: "Go" },
    { value: "html", label: "HTML" },
    { value: "json", label: "JSON" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "kotlin", label: "Kotlin" },
    { value: "less", label: "Less" },
    { value: "lua", label: "Lua" },
    { value: "markdown", label: "Markdown" },
    { value: "objectivec", label: "Objective-C" },
    { value: "php", label: "PHP" },
    { value: "perl", label: "Perl" },
    { value: "plaintext", label: "Plaintext" },
    { value: "python", label: "Python" },
    { value: "python-repl", label: "Python REPL" },
    { value: "r", label: "R" },
    { value: "ruby", label: "Ruby" },
    { value: "rust", label: "Rust" },
    { value: "scss", label: "SCSS" },
    { value: "shell", label: "Shell Session" },
    { value: "sql", label: "SQL" },
    { value: "swift", label: "Swift" },
    { value: "typescript", label: "Typescript" },
    { value: "toml", label: "TOML" },
    { value: "vb", label: "Visual Basic .NET" },
    { value: "xml", label: "XML" },
    { value: "yaml", label: "YAML" },
]

export default {
    placeholder,
    expiration,
    visibility,
    syntax
}