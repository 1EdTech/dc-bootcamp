"use strict";

export default {
    "@context": {
      "@protected": true,
      "id": "@id",
      "type": "@type",
      "OpenBadgeCredential": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#OpenBadgeCredential"
      },
      "Achievement": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Achievement",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "achievementType": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#achievementType"
          },
          "alignment": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#alignment",
            "@container": "@set"
          },
          "creator": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#creator"
          },
          "creditsAvailable": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#creditsAvailable",
            "@type": "https://www.w3.org/2001/XMLSchema#float"
          },
          "criteria": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Criteria",
            "@type": "@id"
          },
          "fieldOfStudy": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#fieldOfStudy"
          },
          "humanCode": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#humanCode"
          },
          "image": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Image",
            "@type": "@id"
          },
          "otherIdentifier": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#otherIdentifier",
            "@container": "@set"
          },
          "related": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#related",
            "@container": "@set"
          },
          "resultDescription": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#resultDescription",
            "@container": "@set"
          },
          "specialization": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#specialization"
          },
          "tag": {
            "@id": "https://schema.org/keywords",
            "@container": "@set"
          },
          "version": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#version"
          }
        }
      },
      "AchievementCredential": {
        "@id": "OpenBadgeCredential"
      },
      "AchievementSubject": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#AchievementSubject",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "achievement": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#achievement-0"
          },
          "activityEndDate": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#activityEndDate",
            "@type": "https://www.w3.org/2001/XMLSchema#date"
          },
          "activityStartDate": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#activityStartDate",
            "@type": "https://www.w3.org/2001/XMLSchema#date"
          },
          "creditsEarned": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#creditsEarned",
            "@type": "https://www.w3.org/2001/XMLSchema#float"
          },
          "identifier": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#identifier",
            "@container": "@set"
          },
          "image": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Image",
            "@type": "@id"
          },
          "licenseNumber": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#licenseNumber"
          },
          "result": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#result",
            "@container": "@set"
          },
          "role": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#role"
          },
          "source": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#source",
            "@type": "@id"
          },
          "term": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#term"
          }
        }
      },
      "Address": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Address",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "addressCountry": {
            "@id": "https://schema.org/addressCountry"
          },
          "addressCountryCode": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#CountryCode"
          },
          "addressLocality": {
            "@id": "https://schema.org/addressLocality"
          },
          "addressRegion": {
            "@id": "https://schema.org/addressRegion"
          },
          "geo": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#GeoCoordinates"
          },
          "postOfficeBoxNumber": {
            "@id": "https://schema.org/postOfficeBoxNumber"
          },
          "postalCode": {
            "@id": "https://schema.org/postalCode"
          },
          "streetAddress": {
            "@id": "https://schema.org/streetAddress"
          }
        }
      },
      "Alignment": {
        "@id": "https://schema.org/AlignmentObject",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "targetCode": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#targetCode"
          },
          "targetDescription": {
            "@id": "https://schema.org/targetDescription"
          },
          "targetFramework": {
            "@id": "https://schema.org/targetFramework"
          },
          "targetName": {
            "@id": "https://schema.org/targetName"
          },
          "targetType": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#targetType"
          },
          "targetUrl": {
            "@id": "https://schema.org/targetUrl",
            "@type": "https://www.w3.org/2001/XMLSchema#anyURI"
          }
        }
      },
      "Criteria": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Criteria"
      },
      "EndorsementCredential": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#EndorsementCredential"
      },
      "EndorsementSubject": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#EndorsementSubject",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "endorsementComment": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#endorsementComment"
          }
        }
      },
      "Evidence": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Evidence",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "audience": {
            "@id": "https://schema.org/audience"
          },
          "genre": {
            "@id": "https://schema.org/genre"
          }
        }
      },
      "GeoCoordinates": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#GeoCoordinates",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "latitude": {
            "@id": "https://schema.org/latitude"
          },
          "longitude": {
            "@id": "https://schema.org/longitude"
          }
        }
      },
      "IdentifierEntry": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#IdentifierEntry",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "identifier": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#identifier"
          },
          "identifierType": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#identifierType"
          }
        }
      },
      "IdentityObject": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#IdentityObject",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "hashed": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#hashed",
            "@type": "https://www.w3.org/2001/XMLSchema#boolean"
          },
          "identityHash": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#identityHash"
          },
          "identityType": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#identityType"
          },
          "salt": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#salt"
          }
        }
      },
      "Image": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Image",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "caption": {
            "@id": "https://schema.org/caption"
          }
        }
      },
      "Profile": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Profile",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "additionalName": {
            "@id": "https://schema.org/additionalName"
          },
          "address": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#address",
            "@type": "@id"
          },
          "dateOfBirth": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#dateOfBirth",
            "@type": "https://www.w3.org/2001/XMLSchema#date"
          },
          "email": {
            "@id": "https://schema.org/email"
          },
          "familyName": {
            "@id": "https://schema.org/familyName"
          },
          "familyNamePrefix": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#familyNamePrefix"
          },
          "givenName": {
            "@id": "https://schema.org/givenName"
          },
          "honorificPrefix": {
            "@id": "https://schema.org/honorificPrefix"
          },
          "honorificSuffix": {
            "@id": "https://schema.org/honorificSuffix"
          },
          "image": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Image",
            "@type": "@id"
          },
          "otherIdentifier": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#otherIdentifier",
            "@container": "@set"
          },
          "parentOrg": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#parentOrg",
            "@type": "@id"
          },
          "patronymicName": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#patronymicName"
          },
          "phone": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#phone"
          },
          "official": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#official"
          }
        }
      },
      "Related": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Related",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "version": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#version"
          }
        }
      },
      "Result": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Result",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "achievedLevel": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#achievedLevel",
            "@type": "https://www.w3.org/2001/XMLSchema#anyURI"
          },
          "resultDescription": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#resultDescription",
            "@type": "https://www.w3.org/2001/XMLSchema#anyURI"
          },
          "status": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#status"
          },
          "value": {
            "@id": "https://schema.org/value"
          }
        }
      },
      "ResultDescription": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#ResultDescription",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "allowedValue": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#allowedValue",
            "@container": "@list"
          },
          "requiredLevel": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#requiredLevel",
            "@type": "https://www.w3.org/2001/XMLSchema#anyURI"
          },
          "requiredValue": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#requiredValue"
          },
          "resultType": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#resultType"
          },
          "rubricCriterionLevel": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#rubricCriterionLevel",
            "@container": "@set"
          },
          "valueMax": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#valueMax"
          },
          "valueMin": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#valueMin"
          }
        }
      },
      "RubricCriterionLevel": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#RubricCriterionLevel",
        "@context": {
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "level": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#level"
          },
          "points": {
            "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#points"
          }
        }
      },
      "alignment": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#alignment",
        "@container": "@set"
      },
      "description": {
        "@id": "https://schema.org/description"
      },
      "endorsement": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#endorsement",
        "@container": "@set"
      },
      "image": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#Image",
        "@type": "@id"
      },
      "name": {
        "@id": "https://schema.org/name"
      },
      "narrative": {
        "@id": "https://purl.imsglobal.org/spec/vc/ob/vocab.html#narrative"
      },
      "url": {
        "@id": "https://schema.org/url",
        "@type": "https://www.w3.org/2001/XMLSchema#anyURI"
      }
    }
  };