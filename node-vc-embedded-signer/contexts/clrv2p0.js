"use strict";

export default {
  "@context": {
    "id": "@id",
    "type": "@type",
    "ClrCredential": {
      "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#ClrCredential",
      "@context": {
        "id": "@id",
        "type": "@type"
      }
    },
    "ClrSubject": {
      "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#ClrSubject",
      "@context": {
        "id": "@id",
        "type": "@type",
        "cred": "https://www.w3.org/2018/credentials#",
        "obi": "https://purl.imsglobal.org/spec/ob/v3p0/vocab.html#",
        "achievement": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#achievement",
          "@type": "obi:Achievement",
          "@container": "@set"
        },
        "association": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#association",
          "@type": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#Association",
          "@container": "@set"
        },
        "verifiableCredential": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#verifiableCredential",
          "@type": "cred:verifiableCredential",
          "@container": "@set"
        }
      }
    },
    "Association": {
      "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#Association",
      "@context": {
        "associationType": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#AssociationType"
        },
        "sourceId": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#sourceId",
          "@type": "xsd:anyURI"
        },
        "targetId": {
          "@id": "https://purl.imsglobal.org/spec/vc/clr/vocab.html#targetId",
          "@type": "xsd:anyURI"
        }
      }
    }
  }
};