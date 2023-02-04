const axios = require('axios');

const getCertificate = (access_token, env, decryptedData) => {
    return axios.post(`${env}/certificates`, null, {
        headers: {
        'X_CHALLENGE': `${decryptedData}`,
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.data);
        return {
            data: response.data
        }
    })
    .catch(error => {
        console.error(error);
    })
}

module.exports = { getCertificate };