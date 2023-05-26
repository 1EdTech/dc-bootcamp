import {securityLoader} from '@digitalbazaar/security-document-loader';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {cryptosuite as eddsa2022CryptoSuite} from
  '@digitalbazaar/eddsa-2022-cryptosuite';
import dataIntegrity from '@digitalbazaar/data-integrity-context';

import { verifyCredential } from '@digitalbazaar/vc';

import context   from './context.js';
import context301   from './context-3.0.1.js';

// load credential to verify
import { signedCredential } from './payloads.js';


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

// create the keypair to use when dereferencing verification method
const controller = 'https://example.com/issuers/876543';

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

// verification
const verSuite = new DataIntegrityProof({
  controller,
  cryptosuite: eddsa2022CryptoSuite
});

const verified = await verifyCredential({
  credential: signedCredential,
  documentLoader: documentLoader,
  suite: [verSuite]
})

console.log(verified);
