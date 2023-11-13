import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;
import {securityLoader} from '@digitalbazaar/security-document-loader';
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import dataIntegrity from '@digitalbazaar/data-integrity-context';

import { verifyCredential } from '@digitalbazaar/vc';

import context   from './context.js';
import context301   from './context-3.0.1.js';
import context302   from './contexts/context-3.0.2.js';
import contextClr   from './contexts/clrv2p0.js';
import contextExtensions   from './contexts/extensions.js';
import {cryptosuite as eddsa2022CryptoSuite} from './eddsa-rfd-2022.js';

import { kpi } from './kpi-1edtech.js';

// load credential to sign
import { unsignedCredential, unsignedClr } from './payloads.js';

const credentialToSign = unsignedCredential;

// create the keypair to use when signing
const keyPair = await Ed25519Multikey.from({
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller : kpi.controller,
  id: `${kpi.controller}#${kpi.publicKeyMultibase}`,
  publicKeyMultibase: kpi.publicKeyMultibase,
  secretKeyMultibase: kpi.secretKeyMultibase
});

console.log('Using multikey:', keyPair);
console.log('Using public key (hex):', Buffer.from(keyPair.publicKey).toString('hex'));
console.log('Using secret key (hex):', Buffer.from(keyPair.secretKey).toString('hex'));

const suite = new DataIntegrityProof({
  signer: keyPair.signer(), cryptosuite: eddsa2022CryptoSuite
});
suite.date = '2010-01-01T19:23:24Z';

const loader = securityLoader();
loader.addStatic(
  dataIntegrity.CONTEXT_URL, dataIntegrity.CONTEXT
);
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld", context
);
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json", context301
)
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json", context302
)
loader.addStatic(
  "https://purl.imsglobal.org/spec/clr/v2p0/context.json", contextClr
)
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json", contextExtensions
)
loader.addStatic(
  keyPair.id,
  {
    "@context": "https://w3id.org/security/multikey/v1",
    type: 'Multikey',
    controller: keyPair.controller,
    id: keyPair.id,
    publicKeyMultibase: keyPair.publicKeyMultibase,
  }
);
loader.addStatic(
  keyPair.controller,
  {
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
  ],
  "id": keyPair.controller,
  "assertionMethod": [
    keyPair.id
  ]
});

const documentLoader = loader.build();

console.log('\nUnsigned credential')
console.log(JSON.stringify(credentialToSign, null, 2));

const signedCredential = await jsigs.sign(credentialToSign, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log('\nSigned credential');
console.log(JSON.stringify(signedCredential, null, 2));

// verification

const verSuite = new DataIntegrityProof({cryptosuite: eddsa2022CryptoSuite});

const verified = await verifyCredential({
  credential: signedCredential,
  documentLoader: documentLoader,
  checkStatus: () => { return {verified: true}}, // simple status check
  suite: [verSuite]
})

console.log(verified);
