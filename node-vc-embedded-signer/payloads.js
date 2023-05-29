"use strict";

export const unsignedCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld",
  ],
  id: "http://example.com/credentials/3527",
  type: ["VerifiableCredential", "OpenBadgeCredential"],
  issuer: {
    id: "https://example.com/issuers/876543",
    type: ["Profile"],
    url: "https://www.imsglobal.org",
    name: "Example Corp",
  },
  issuanceDate: "2010-01-01T00:00:00Z",
  name: "Teamwork Badge",
  credentialSubject: {
    id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
    type: ["AchievementSubject"],
    achievement: {
      id: "https://example.com/achievements/21st-century-skills/teamwork",
      type: ["Achievement"],
      criteria: {
        narrative:
          "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management.",
      },
      description:
        "This badge recognizes the development of the capacity to collaborate within a group environment.",
      name: "Teamwork",
    },
  },
};

export const signedCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld",
    "https://w3id.org/security/data-integrity/v1"
  ],
  "id": "http://example.com/credentials/3527",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/876543",
    "type": [
      "Profile"
    ],
    "url": "https://www.imsglobal.org",
    "name": "Example Corp"
  },
  "issuanceDate": "2010-01-01T00:00:00Z",
  "name": "Teamwork Badge",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/21st-century-skills/teamwork",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "narrative": "Team members are nominated for this badge by their peers and recognized upon review by Example Corp management."
      },
      "description": "This badge recognizes the development of the capacity to collaborate within a group environment.",
      "name": "Teamwork"
    }
  },
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2010-01-01T19:23:24Z",
    "verificationMethod": "https://example.com/issuers/876543#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi",
    "cryptosuite": "eddsa-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z4qak22wvg7qwFSZtUdWbRUd7wCjU2VKKXU7NPuugBNYmeB6hHgdqUxChGxS33DUuUQmfgsjhdPkpfgg6zH9HzHdv"
  }
}

;
