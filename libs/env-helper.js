function isSandbox(env) {
    const urlSandbox = 'https://sandbox.api.pagseguro.com';
    const urlProd = 'https://api.pagseguro.com';
    
    if (env === true) {
        return urlSandbox;
    }
    return urlProd;
}

module.exports = {
    isSandbox
};