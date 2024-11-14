import { defaultDocumentLoader, verifyCredential, issue } from '@digitalbazaar/vc';

// data integrity proof
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}, extendContextLoader} = jsigs;

// key and cryptosuite
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import * as ecdsaSd2023Cryptosuite
  from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
const {createSignCryptosuite, createDiscloseCryptosuite} = ecdsaSd2023Cryptosuite;

// import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
// import {cryptosuite as eddsaRdfc2022CryptoSuite} from
// '@digitalbazaar/eddsa-rdfc-2022-cryptosuite';

// contexts
import * as vcContexts from '@digitalbazaar/credentials-v2-context';
import dataIntegrityContexts from '@digitalbazaar/data-integrity-context';
import customContexts from './contexts.js';

// key pair information
import { kpi } from './kpi/kpi-1edtech.js';
import { multikeyDocumentUrl, multikeyDocument, controllerDocumentUrl, controllerDocument } from './verification-documents.js';

// load credential to sign
import { unsignedCredential, unsignedClr } from './payloads.js';

const credentialToSign = unsignedCredential;

// create the keypair to use when signing
const ecdsaMultikeyKeyPair = {
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller: kpi.controller,
  id: `${kpi.controller}#${kpi.publicKeyMultibase}`,
  publicKeyMultibase: kpi.publicKeyMultibase,
  secretKeyMultibase: kpi.secretKeyMultibase

};
const keyPair = await EcdsaMultikey.from({...ecdsaMultikeyKeyPair});

console.log('Using multikey:', keyPair);
// console.log('Using public key (hex):', Buffer.from(keyPair.publicKey).toString('hex'));
// console.log('Using secret key (hex):', Buffer.from(keyPair.secretKey).toString('hex'));

const suite = new DataIntegrityProof({
  signer: keyPair.signer(),
  cryptosuite: createSignCryptosuite()
});
suite.date = '2010-01-01T19:23:24Z';

const staticDocuments = new Map();
staticDocuments.set(
  multikeyDocumentUrl(kpi),
  multikeyDocument(kpi)
);

staticDocuments.set(
  controllerDocumentUrl(kpi),
  controllerDocument(kpi)
);


// document loader
const documentLoader = extendContextLoader(async url => {
  const context = [vcContexts, dataIntegrityContexts, customContexts]
    .map(d => d.contexts.get(url))
    .find(c => c !== undefined);
  if (context !== undefined) {
    return {
      contextUrl: null,
      documentUrl: url,
      document: context
    };
  }

  if (staticDocuments.has(url)) {
    return {
      contextUrl: null,
      documentUrl: url,
      document: staticDocuments.get(url)
    };
  }

  console.log("could not find document " + url)
  return defaultDocumentLoader(url);
});

console.log('\nUnsigned credential')
console.log(JSON.stringify(credentialToSign, null, 2));

const signedCredential = await issue({
  credential: credentialToSign,
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log('\nSigned credential');
console.log(JSON.stringify(signedCredential, null, 2));

// derived credential
const derivedSuite = new DataIntegrityProof({
  cryptosuite: createDiscloseCryptosuite({
    selectivePointers: ['/credentialSubject/id', '/credentialSubject/achievement/name']
  })
});


// create derived credential from the signed credential
const derivedCredential = await jsigs.derive(signedCredential, {
  suite: derivedSuite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log('\nDerived credential');
console.log(JSON.stringify(derivedCredential, null, 2));

// verification

// const verSuite = new DataIntegrityProof({cryptosuite: eddsaRdfc2022CryptoSuite});

// const verified = await verifyCredential({
//   credential: signedCredential,
//   documentLoader: documentLoader,
//   checkStatus: () => { return {verified: true}}, // simple status check
//   suite: [verSuite]
// })

// console.log(verified);
