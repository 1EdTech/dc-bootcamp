// data integrity proof
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';

// key and cryptosuite
import {cryptosuite as eddsaRdfc2022CryptoSuite} from
'@digitalbazaar/eddsa-rdfc-2022-cryptosuite';

import { defaultDocumentLoader, verifyCredential } from '@digitalbazaar/vc';
import jsigs from 'jsonld-signatures';
const { extendContextLoader } = jsigs;

// contexts
import * as vcContexts from '@digitalbazaar/credentials-v2-context';
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

// verification
const verSuite = new DataIntegrityProof({cryptosuite: eddsaRdfc2022CryptoSuite});

const verified = await verifyCredential({
  credential: signedCredential,
  documentLoader: documentLoader,
  suite: [verSuite]
})

console.log(verified);
