const { checkSchema } = require("express-validator");

module.exports = [
    checkSchema({
        name: {isString: true, isLength: {max: 8}},
        description: {exists: true},
        order: {isInt: true},
        link: {isURL: true}
    })
]