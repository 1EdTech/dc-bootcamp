import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;
import {Ed25519VerificationKey2020} from
  '@digitalbazaar/ed25519-verification-key-2020';
import {Ed25519Signature2020, suiteContext} from
  '@digitalbazaar/ed25519-signature-2020';
import {securityLoader} from '@digitalbazaar/security-document-loader';
import ed25519Context2020 from 'ed25519-signature-2020-context';

import context   from './context.js';

// create the unsigned credential
const unsignedCredential = {
    '@context': [
      "https://www.w3.org/2018/credentials/v1",
      "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld",
      "https://w3id.org/security/suites/ed25519-2020/v1"
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
  "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld", context
)

const documentLoader = loader.build();


const signedCredential = await jsigs.sign(unsignedCredential, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

console.log(JSON.stringify(signedCredential, null, 2));