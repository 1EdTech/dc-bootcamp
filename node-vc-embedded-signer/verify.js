import { defaultDocumentLoader } from '@digitalbazaar/vc';

// data integrity proof
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import jsigs from 'jsonld-signatures';
const {extendContextLoader, purposes: {AssertionProofPurpose}} = jsigs;

// key and cryptosuite
import * as ecdsaSd2023Cryptosuite
  from '@digitalbazaar/ecdsa-sd-2023-cryptosuite';
const {createVerifyCryptosuite} = ecdsaSd2023Cryptosuite;

// contexts
import * as vcContexts from '@digitalbazaar/credentials-context'

import dataIntegrityContexts from '@digitalbazaar/data-integrity-context';
import customContexts from './contexts.js';

// key pair information to use when dereferencing verification method
import { kpi } from './kpi/kpi-1edtech.js';
import { multikeyDocumentUrl, multikeyDocument, controllerDocumentUrl, controllerDocument } from './verification-documents.js';

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

// load credential to verify
import { signedCredential } from './payloads.js';

const verificationSuite = new DataIntegrityProof({
  cryptosuite: createVerifyCryptosuite()
});

// verify the signed credential
const result = await jsigs.verify(signedCredential, {
  suite: verificationSuite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});
console.log(result);