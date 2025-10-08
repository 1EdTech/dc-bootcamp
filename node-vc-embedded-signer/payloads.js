"use strict";

export const unsignedCredential = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
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
    result: [
      {
        type: ["Result"],
        value: "Passed",
      },
    ],
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
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
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
  proof: {
    type: "DataIntegrityProof",
    created: "2010-01-01T19:23:24Z",
    verificationMethod:
      "https://1edtech.edu/issuers/565049#zDnaekGZTbQBerwcehBSXLqAg6s55hVEBms1zFy89VHXtJSa9",
    cryptosuite: "ecdsa-sd-2023",
    proofPurpose: "assertionMethod",
    proofValue:
      "u2V0BhVhAVrRD4x9j7ya02Hp8-eTaZXba7ifJc_GHBD_m-ZOxfY77E4AzzSsGMDyXqlsJHkjpIugtnksSgr-RMZA9HdpZGFgjgCQDR9PXNz9b8B28VZqrxx6FfPKVsntpvPzZgGOTBPDe4Y6PWECT6DS3cYAFoxTESK2FgwQcVDcryrRg-BOHBbu4Wrzo1aaflUnEHY6fh9ko3FV-w04G8VHRCvfKgeHiCESnZoPpWED9bXOx9BOEgaeYR5KVXvJKLRaTP7R-IzEtQGzy8U2LxzkQViyjJ6CSG5q5oC_vJm1O_ZwG_yV6e6JmFxRP9YDpWEA20y64aoZHKLMS9PfgGTuc8XL9NhuyfeB5Do4bE4XSyWesiIEh56VwVljeaFndqoZGjulHM5uy8oCeFHvwsHKUWEDzfcwr81RdvLzPb3VSOtoi3i_uBv0tjmkRbK4fuuFABVedzuqO5Crp2s1gCuk7x6oc4MTm9Um0Y1TPz8CQb18xWEBfVu-BmUTKt2rm7gdiMBjABFsu9013Gh1NW2xNclz2aRm6OMBtz-j8FC4HoG5GBbzhvAhw5ijl_g3EJA-kmg3MWEBnpiiafKzLznC_sOBgk11CSONgjTKP1v8A5vvAtOCTuD8QypP7qb3TDZmkDvUsEjbDE2b9mIS4b4W6rhHRnytgWEA5-WYiuT2NP7dREnDHRSG4vvgpDmXWiPAtjoVfhwCf2lUCJ7W5DZh14wUZhc8-yZ4rbNUj6ueFhoMYkHw4rbQwWEDPx0I-wLNweXUmadvEtaMABvhWy_DWcdgDbyNFJuI8tlZUuglJ44AgarddsJJlFVWv4bXJYRHbpAK83h9iXJxNWEDfg1s4Ka4KiclpEbj4yo_h6cTd9UBUGdU42p4hSXMkGObxnpNW856sYSYIkh1r9qaZzLFPvgxOLH5ovBgzgpIiWEBuG4-MdR-r5HrHbJvSR00W7fEXZxsyc28aMQN4vwEUGp5K42zfnW_bEmRVddFnXoJqy459SauWoZ8ZV_fcK44NWEADb7a6rypZQH3Pu2B-5H7DYdR_vBUuu0mHiGa2e6q9XpH2Xe0VQWkBBu3ANsilxH72XX_9QM-yKV-C_46D25A3WEDBU8B6ZwB_8k0JRLVxeunRsXsz9A4A4muZHlAoiVEuMCW1Blq8_suXbrQPKOzW_raBc0NxVjd6O99SKyXP5GyKWECmkX6rlQoP6HmQNZLJc-sh8dWeznutbDF2Tbn45KIZYqwh7DW9d2W_LzZ5QApNMl83JcBH5Mw-YIx_xlwBWsg_WECgur0fRZSoHYfC_EricUrUrFCNhUVj-iLbNmrYDkbh-_Ob5y8TPdvJSW_Iu5fO3_lwZpJhc5dpLRLTwchUzvMrWEBIwyRZtg3xUPTlrpBhE6SD3louL2c0FLSn16JAB66Z3faunIH9YXRT_rgB3ua9waUIKnmp8NFxRifD_yZVeo1soQBYIP6yN2TIYGPUoiB-pOA91R5Vjpp-MzCdcFLPiPqbqrMNgA",
  },
};
;
