"use strict";

export const unsignedCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context/ob_v3p0.jsonld",
  ],
  id: "http://example.com/credentials/3527",
  type: ["VerifiableCredential", "OpenBadgeCredential"],
  issuer: {
    id: "https://1edtech.edu/issuers/565049",
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

export const unsignedClr = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/clr/v2p0/context.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
    "https://w3id.org/security/data-integrity/v1"
  ],
  "id": "http://example.edu/credentials/3732",
  "type": [
    "VerifiableCredential",
    "ClrCredential"
  ],
  "issuer": {
    "id": "https://example.edu/issuers/565049",
    "type": "Profile",
    "name": "Example University"
  },
  "issuanceDate": "2010-01-01T00:00:00Z",
  "name": "Sample Transcript",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": "ClrSubject",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.2.json",
          "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
          "https://w3id.org/security/data-integrity/v1"
        ],
        "id": "urn:uuid:91537dba-56cb-11ec-bf63-0242ac130002",
        "type": [
          "VerifiableCredential",
          "AchievementCredential"
        ],
        "issuer": {
          "id": "https://example.edu/issuers/565049",
          "type": "Profile",
          "name": "Example University"
        },
        "issuanceDate": "2010-01-01T00:00:00Z",
        "name": "Example University Degree",
        "credentialSubject": {
          "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
          "type": "AchievementSubject",
          "achievement": {
            "id": "urn:uuid:a7467ef6-56cb-11ec-bf63-0242ac130002",
            "type": "Achievement",
            "creator": {
              "id": "https://example.edu/issuers/565049",
              "type": "Profile"
            },
            "name": "Achievement 1",
            "criteria": {
              "id": "https://example.edu/achievements/a7467ef6-56cb-11ec-bf63-0242ac130002/criteria"
            },
            "description": "Achievement 1",
            "image": {
              "id": "https://example.edu/achievements/sample.png",
              "type": "Image"
            }
          }
        },
        "credentialSchema": [
          {
            "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
            "type": "1EdTechJsonSchemaValidator2019"
          }
        ],
        "proof": {
          "type": "DataIntegrityProof",
          "created": "2010-01-01T19:23:24Z",
          "verificationMethod": "https://example.edu/issuers/565049#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi",
          "cryptosuite": "eddsa-rdfc-2022",
          "proofPurpose": "assertionMethod",
          "proofValue": "z2CGNmCgEmN68CWch6Kgg4vnjRDE896jnUqfQtJoG11qxC8ntxUPCQaGckoHG7BXW7KWZyUiSs5EkKX3gEiGYKrz"
        }
      }
    ],
    "achievement": [
      {
        "id": "urn:uuid:a7467ef6-56cb-11ec-bf63-0242ac130002",
        "type": "Achievement",
        "creator": {
          "id": "https://example.edu/issuers/565049",
          "type": "Profile"
        },
        "name": "Achievement 1",
        "criteria": {
          "id": "https://example.edu/achievements/a7467ef6-56cb-11ec-bf63-0242ac130002/criteria"
        },
        "description": "Achievement 1",
        "image": {
          "id": "https://example.edu/achievements/sample.png",
          "type": "Image"
        }
      },
      {
        "id": "urn:uuid:dd887f0a-56cb-11ec-bf63-0242ac130002",
        "type": "Achievement",
        "creator": {
          "id": "https://example.edu/issuers/565049",
          "type": "Profile"
        },
        "name": "Achievement 2",
        "criteria": {
          "id": "https://example.edu/achievements/dd887f0a-56cb-11ec-bf63-0242ac130002/criteria"
        },
        "description": "Achievement 2",
        "image": {
          "id": "https://example.edu/achievements/sample.png",
          "type": "Image"
        }
      }
    ],
    "association": [
      {
        "type": "Association",
        "associationType": "isParentOf",
        "sourceId": "urn:uuid:a7467ef6-56cb-11ec-bf63-0242ac130002",
        "targetId": "urn:uuid:dd887f0a-56cb-11ec-bf63-0242ac130002"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/clr/v2p0/schema/json/clr_v2p0_clrcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}

export const signedCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
    "https://w3id.org/security/data-integrity/v1"
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
  "issuer": { "id": "https://example.com/issuers/876543", "type": ["Profile"] },
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2023-05-29T08:42:26Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://example.com/issuers/876543#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi",
    "cryptosuite": "eddsa-2022",
    "proofValue": "z2H1miRAGKPRCPUSudNTPrsWyvpRZzgtgjPBmnMkbcwR8StwEv8dr3NigviBgvZwBu8yA7wAyF5qLjyo3zN1UqLR2"
  }
}

;
