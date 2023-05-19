import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;
import {securityLoader} from '@digitalbazaar/security-document-loader';
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {cryptosuite as eddsa2022CryptoSuite} from
  '@digitalbazaar/eddsa-2022-cryptosuite';
import dataIntegrity from '@digitalbazaar/data-integrity-context';


import context   from './context.js';

// create the unsigned credential
const unsignedCredential = {
    '@context': [
      "https://www.w3.org/2018/credentials/v1",
      "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld",
      "https://www.w3.org/2018/credentials/v1"
    ],
    id: "http://example.com/credentials/3527",
    type: [
      "VerifiableCredential",
      "OpenBadgeCredential"
    ],
    issuer: {
      id: "https://example.com/issuers/876543",
      type: [
        "Profile"
      ],
      url: "https://www.imsglobal.org",
      name: "Example Corp"
    },
    issuanceDate: "2010-01-01T00:00:00Z",
    name: "Teamwork Badge",
    credentialSubject: {
      id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
      type: [
        "AchievementSubject"
      ],
      achievement: {
        id: "https://example.com/achievements/21st-century-skills/teamwork",
        type: [
          "Achievement"
        ],
        criteria: {
          narrative: "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
        },
        description: "This badge recognizes the development of the capacity to collaborate within a group environment.",
        name: "Teamwork"
      }
    }
  };

// create the keypair to use when signing
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
)

const documentLoader = loader.build();


const signedCredential = await jsigs.sign(unsignedCredential, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log(JSON.stringify(signedCredential, null, 2));