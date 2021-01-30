const { body } = require('express-validator')

exports.rules = (() => {
    return [
        body('fullName').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 3 })
    ]
})()