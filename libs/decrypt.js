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



// '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdhG40SnK9BtrvT3kJ7C1Gmog35MrJnfVOPJbypQO3ic+ntj2i9LjG/+nT3iKEGuYUYcT1L8bDrVUZm65PycCmXxU+gTqUj9RXboAOZDCLIrIgjSCeV2I648LKWP5t1ct8TpEJcV7+jVY+97k/UrjiGCTAZ/I2EBVWFtzyYSAV6ATiK07Wt24q54XhNGSE7fkd2LgtQhfTjUH8BmDJh/AvGlfwS50xQobQVgjxAj6tRaRkFj0Bd3EIrMTFyawD2bMWEw+LBnrLYy5x17K08SUDIOZQAWDpwRSzdKEmCwXLgrvpwen/cCtElNyEtJgGmmLqFhFMM767qAme8jjDWk3fAgMBAAECggEBAIRbjDLaP/GAOiWOtRlWYHEMVtwInzGtTjwwg3JeoHHwFhJJ+x7b3gwxbC0AYiZ5Z83GnbadL7qrAnAjNeSLlhr2mKZN9ohxFy9khawSGgw/2kep7re+m6b6TWq0Pw7R8EuCxTKXFgh1gPwmMn34J6ysNu2KKqes+hC942iznj9oxGQhKWNd1oJM1pgAagnbfPCxk8ltRGqgcWnfkYIiaFPUsnOSOabeUev77gupY9/LXG7HNe1s3V3IhJvK/+lbiFj1pizk7G61yvuO9nkAxEgFgDLjGYqusIi/Dqf+xmSxAM5wU7dUgTM55oPbzcyfMfq9WqNV/jyt9rSiJLwVMQkCgYEA4I2EOAfjzJqAhwDCaqrQT2EW24DoYpn52guipAllUsAJKv6yxMvWSnU0MCAby8zJq3/iFrEy2tSuQvDvZnzrFaQY+AOeS3ALiiAQuHo69E3lmvGy95oobeiKeG08DLHiMUmaJKiD/mb9CZ9RURe+mNDNakUoy5qjFPvAovIeOBUCgYEAs5Ocv3mH8iwQGQM2gTsHoQsb4wJpa9mgg+Poa0rhkDnK79Sb8xkTvTsZPyZpR5ZTr3gP9fbGyMJuaL7cg34mCwIqhFWNv+3I+ptzSCkYukwBHV9JKTX4tPbr2p5ehzWIEE+uTJwBjV6W+WvKOEOt0yeebvOW8WynKoEFjjhj1yMCgYB6SxgzG7joeUx+Od+oEBca5Bl6uh3VdV4pbiTJiYRxKLzVeZkKrKisLGCbxSDeQU2j5SXQjfjQTPwK4QTAoE+3nYMrr2zKUN83/nacwZTR8IqXdAKv7nkOQpMHOxZ1I3u4tAkK5evc5WHxl57Ft1TKDQ2STtAE8tbWWrVzCMGEcQKBgBg2GrgmJpIcJr94k2yxDMJFwSjGNnh4CxA9NiThH7BWWmojfDM2elbVFP5Sq3cfaYEK6vv6naqLrF8q/IguBesOC7Vz43yxDpvbQZvFDrRvcucG5dJMmI+tivcayxvnt8SbOaDSl9L7oddXFRio51LE0LOc3AkI4TD13E3khHGJAoGBANxq3CfC0/o8hobi6pl12z0H0Y2RaY+wvJvIIs73NU9o0QSnaPnXl0g6Al4TUGblAYNYKhHCRMz7fyJyLjVamIugSkF5d6jBRpix7XKIuau86GllfxzcCvDnq5JkIg/dlYbBw1MmXoMuN4Cz1VqefLQ6BCREB3XQ375g18+qAWbW\n-----END PRIVATE KEY-----' 

