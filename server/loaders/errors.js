class InternalError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ForbiddenPasteError extends Error {
    constructor(lockedReason) {
        super();
        this.name = this.constructor.name;
        this.errors = lockedReason;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    InternalError,
    NotFoundError,
    ForbiddenPasteError
}