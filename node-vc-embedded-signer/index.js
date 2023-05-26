import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;
import {Ed25519VerificationKey2020} from
  '@digitalbazaar/ed25519-verification-key-2020';
import {Ed25519Signature2020, suiteContext} from
  '@digitalbazaar/ed25519-signature-2020';
import {securityLoader} from '@digitalbazaar/security-document-loader';
import ed25519Context2020 from 'ed25519-signature-2020-context';

import contexts   from './context.js';

import { verifyCredential } from '@digitalbazaar/vc';

// create the unsigned credential
const unsignedCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "https://dc.1edtech.org/wellspring2022/wellspring-portal/credential/54418d3f-ec01-4652-800a-861c890a51a1",
  "type": [
    "VerifiableCredential",
    "AchievementCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/876543",
    "type": "Profile",
    "address": {
      "type": "Address",
      "addressCountry": "Japan"
    },
    "name": "1EdTech Testing"
  },
  "awardedDate": "2023-05-22T10:21:00Z",
  "issuanceDate": "2023-05-23T01:10:41Z",
  "name": "ob3-credential-status-revoked.json",
  "description": "This achievement credential is used in ims-inspector OB30Tests.",
  "credentialSubject": {
    "id": "did:web:dc.1edtech.org:wellspring2022:wellspring-portal:learner:6896f98f-6b42-4c75-98ec-8befd0dc0b29",
    "type": "AchievementSubject",
    "achievement": {
      "id": "https://dc.1edtech.org/wellspring2022/wellspring-portal/achievement/45badd38-e201-4cf3-927f-be55bc7eb414",
      "type": "Achievement",
      "achievementType": "Achievement",
      "criteria": {
        "narrative": "Passes tests"
      },
      "description": "Test achievement 1",
      "name": "Achievement 1"
    },
    "source": {
      "id": "http://",
      "type": "Profile",
      "address": {
        "type": "Address",
        "addressCountry": "Japan"
      },
      "name": "1EdTech Testing"
    }
  }
};

// create the keypair to use when signing
const controller = 'https://example.com/issuers/876543';
const keyPair = await Ed25519VerificationKey2020.from({
  type: 'Ed25519VerificationKey2020',
  controller,
  id: controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  publicKeyMultibase: 'z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  privateKeyMultibase: 'zrv2bqTbNwCTsRrHFcJCPjVAduh4Ezcnoq1A3ZxH1GWTNkxipLVuaAoMFmze2gFN9oNXfJjufxSHWVZzsJiUsMHFMcx'
});

const suite = new Ed25519Signature2020({key: keyPair});
suite.date = '2010-01-01T19:23:24Z';

const loader = securityLoader();
loader.addStatic(
  ed25519Context2020.CONTEXT_URL, ed25519Context2020.contexts.get(ed25519Context2020.constants.CONTEXT_URL)
);
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld", contexts["https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld"]
);
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json", contexts["https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json"]
);
loader.addStatic(
  "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json", contexts["https://purl.imsglobal.org/spec/ob/v3p0/extensions.json"]
);
loader.addStatic(
  controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  {
    "@context": "https://w3id.org/security/suites/ed25519-2020/v1",
    "type": "Ed25519VerificationKey2020",
    controller,
    id: controller + '#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
    publicKeyMultibase: 'z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi',
  }
);
loader.addStatic(
  controller, {
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
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

// verify the signed credential
const anotherCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "type": ["VerifiableCredential", "AchievementCredential"],
  "id": "http://www.1edtech.org/ob/1",
  "issuanceDate": "2022-11-27T00:00:00Z",
  "credentialSubject": {
    "type": "AchievementSubject",
    "id": "did:1edtech:1",
    "achievement": {
      "id": "did:1edtech:achievement:1",
      "type": ["Achievement"],
      "criteria": { "narrative": "some narrative" },
      "description": "some description",
      "name": "some name"
    }
  },
  "name": "Some name",
  "issuer": { "id": "http://www.1edtech.org", "type": ["Profile"] },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2023-05-26T13:33:55Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://example.com/issuers/876543#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi",
    "proofValue": "z5aJQRukw82fPnuSVn3RnD5PWi1k76GRQvu1d69ATZH1ruZULFiq3erPJWT6HkDW5sBDMnHopMj9e6gKHn3GNexHu"
  }
}

const verSuite = new Ed25519Signature2020();

const verified = await verifyCredential({
  credential: signedCredential,
  documentLoader: documentLoader,
  suite: [verSuite]
})

console.log(verified);