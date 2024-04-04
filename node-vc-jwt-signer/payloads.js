"use strict";

export const unsignedCredential = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  id: "http://example.com/credentials/3527",
  type: ["VerifiableCredential", "OpenBadgeCredential"],
  issuer: {
    id: "https://1edtech.edu/issuers/565049",
    type: ["Profile"],
    url: "https://www.imsglobal.org",
    name: "Example Corp",
  },
  validFrom: "2010-01-01T00:00:00Z",
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
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/clr/v2p0/context-2.0.1.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json"
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
  "validFrom": "2010-01-01T00:00:00Z",
  "name": "Sample Transcript",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": "ClrSubject",
    "verifiableCredential": [
      {
        "@context": [
          "https://www.w3.org/ns/credentials/v2",
          "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
          "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json"
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
        "validFrom": "2010-01-01T00:00:00Z",
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
          "proofValue": "z45QnLySMt2mWuW787G6cf3SLkP97ZkMZxLeXH5yaaTQPCtTup4GCV95tU8HEnQJSyGCokSj3AvUhmJtvveTmN4Vu"
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
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "http://example.com/credentials/3527",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://1edtech.edu/issuers/565049",
    "type": [
      "Profile"
    ],
    "url": "https://www.imsglobal.org",
    "name": "Example Corp"
  },
  "validFrom": "2010-01-01T00:00:00Z",
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
    "verificationMethod": "https://1edtech.edu/issuers/565049#z6MkjZRZv3aez3r18pB1RBFJR1kwUVJ5jHt92JmQwXbd5hwi",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z65HUy8R54Yj1HijQ45h9AvVVdW8hs8YBaYsgCMaK97ABZ5zkEZSh5BLQC9rn4nrLmcXSycUTkPbYkebnbKUVacNL"
  }
}

;
