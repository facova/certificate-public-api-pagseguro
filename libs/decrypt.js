var crypto = require('crypto');

const getDecrypt = ( pkPem, challenge ) => {

    const privateKeyPem = pkPem;
    const privateKey = crypto.createPrivateKey({key: privateKeyPem});
    
    return crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
    }, Buffer.from(challenge, 'base64'));
}

module.exports = { getDecrypt }