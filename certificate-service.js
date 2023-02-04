const { isSandbox } = require('./libs/env-helper');
const challangeClient = require('./libs/challenge-client')
const certificateChallange = require('./libs/certificate-client')
const { getDecrypt } = require('./libs/decrypt')

// Configurações de ambiente
const authToken = '<<inserir aqui token ibanking do pagseguro>>';
const privateKey = '-----BEGIN PRIVATE KEY-----\n<< inserir aqui chave privada >>\n-----END PRIVATE KEY-----';
const env = isSandbox(true);

async function runCertificate() {
  //Chamada para o Challange
  try {
    console.log("Iniciando chamada para o Connect Challange");
    const responseChallange = await challangeClient.getChallange(authToken, env);
    const challenge = responseChallange.challenge;
    const access_token = responseChallange.access_token;
     
  //Decrypt
    console.log("Iniciando descriptografia do desafio");
    const decryptedData = await getDecrypt(privateKey, challenge);
    const decryptedDataString = decryptedData.toString();
    console.log(`Descriptografia finalizada com sucesso: ${decryptedDataString}`);

//chamada para o Certificate Manager
    console.log("Iniciando chamada para o Certificate Manager");
    await certificateChallange.getCertificate(access_token, env, decryptedDataString)

  } catch (error) {
    console.error(error);
  }
}

runCertificate();