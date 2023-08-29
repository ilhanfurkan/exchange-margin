const jwt = require('jsonwebtoken');

exports.createToken = (payload, expired) => {
    const newToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: expired,
    })

    return newToken;
}

