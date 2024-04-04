import * as jose from 'jose'
import { toSeconds } from './time-utils.js';

// load credential to sign
import { unsignedCredential, unsignedClr } from './payloads.js';
const credentialToSign = unsignedCredential;

// generate key pair
const alg = 'RS256'
const keyPair = await jose.generateKeyPair(alg);

const publicKey = await jose.exportJWK(keyPair.publicKey);

const signer = new jose.SignJWT(credentialToSign)
  .setProtectedHeader({ alg, jwk: publicKey})
  .setIssuedAt()
  .setIssuer(credentialToSign.issuer.id)
  .setAudience(credentialToSign.credentialSubject.id)
  .setNotBefore(toSeconds(credentialToSign.validFrom))
  .setJti(credentialToSign.id);

if (credentialToSign.validUntil)  {
  signer.setExpirationTime(toSeconds(credentialToSign.validUntil))
}

const jwt = await signer.sign(keyPair.privateKey);

console.log('\nSigned credential');
console.log(jwt)

// verification

const { payload, protectedHeader } = await jose.jwtVerify(jwt, (header, _token) => {
  return jose.importJWK(header.jwk, { alg: header.alg });
});

console.log(protectedHeader)
console.log(payload)