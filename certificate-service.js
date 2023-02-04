const { isSandbox } = require('./libs/env-helper');
const challangeClient = require('./libs/challenge-client')
const certificateChallange = require('./libs/certificate-client')
const { getDecrypt } = require('./libs/decrypt')

const authToken = '<token-do-obaking-aqui>';
const privateKey = '-----BEGIN PRIVATE KEY-----\n<conteudo-da-chave-privada-aqui>\n-----END PRIVATE KEY-----';
// Se isSandbox for verdadeiro, URLs setadas para o ambiente Sandbox. Caso seja falso - URL de Produçao
const env = isSandbox(true);

async function runCertificate() {
  //Chamada para o Challange
  try {
    console.log("Iniciando chamada para o Connect Challange");
    const responseChallange = await challangeClient.getChallange(authToken, env);
    const challenge = responseChallange.challenge;
    const access_token = responseChallange.access_token;
     
  //Decrypt
    console.log("Iniciando decrypt");
    const decryptedData = await getDecrypt(privateKey, challenge);
    const decryptedDataString = decryptedData.toString();

//chamada para o Certificate Manager
    console.log("Iniciando chamada para o geraçao de certificado");
    await certificateChallange.getCertificate(access_token, env, decryptedDataString)

  } catch (error) {
    console.error(error);
  }
}

runCertificate();