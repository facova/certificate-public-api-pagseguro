const axios = require('axios');

const getChallange = (authToken, env) => {
    return axios.post(`${env}/oauth2/token`, {
        "grant_type": "challenge",
        "scope": "certificate.create" 
    }, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'    
        }
    })
    .then(response => {
        console.log("Chamada para o challange recebida com sucesso.")
        return {
            access_token: response.data.access_token,
            challenge: response.data.challenge
        }
    }).catch(error => {
        console.log("Erro na chamada do challange. Error: %s", error);
        console.error(error);
        return {
            error
        };
    });
}

module.exports = { getChallange };