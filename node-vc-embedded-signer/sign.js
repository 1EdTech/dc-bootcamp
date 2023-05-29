import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;
import {securityLoader} from '@digitalbazaar/security-document-loader';
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {cryptosuite as eddsa2022CryptoSuite} from
  '@digitalbazaar/eddsa-2022-cryptosuite';
import dataIntegrity from '@digitalbazaar/data-integrity-context';

import { verifyCredential } from '@digitalbazaar/vc';

import context   from './context.js';
import context301   from './context-3.0.1.js';

// load credential to sign
import { unsignedCredential } from './payloads.js';


// create the keypair to use when signing
//const controller = 'http://www.1edtech.org';
const controller = 'https://example.com/issuers/876543';

const keyPair = await Ed25519Multikey.from({
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller,
  id: controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  publicKeyMultibase: 'z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  secretKeyMultibase: 'zrv2bqTbNwCTsRrHFcJCPjVAduh4Ezcnoq1A3ZxH1GWTNkxipLVuaAoMFmze2gFN9oNXfJjufxSHWVZzsJiUsMHFMcx'
});

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
  controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  {
    "@context": "https://w3id.org/security/multikey/v1",
    type: 'Multikey',
    controller,
    id: controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
    publicKeyMultibase: 'z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  }
);
loader.addStatic(
  controller, {
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
  ],
  "id": controller,
  "assertionMethod": [
    controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi'

  ]
});

const documentLoader = loader.build();

const signedCredential = await jsigs.sign(unsignedCredential, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log(JSON.stringify(signedCredential, null, 2));

// verification

const verSuite = new DataIntegrityProof({cryptosuite: eddsa2022CryptoSuite});

const verified = await verifyCredential({
  credential: signedCredential,
  documentLoader: documentLoader,
  suite: [verSuite]
})

console.log(verified);
