export const multikeyDocumentUrl = (kpi) => {
    return `${kpi.controller}#${kpi.publicKeyMultibase}`;
};

export const multikeyDocument = (kpi) => {
  return {
    "@context": "https://w3id.org/security/multikey/v1",
    type: 'Multikey',
    controller: kpi.controller,
    id: `${kpi.controller}#${kpi.publicKeyMultibase}`,
    publicKeyMultibase: kpi.publicKeyMultibase,
  }
};

export const controllerDocumentUrl = (kpi) => {
    return kpi.controller;
};

export const controllerDocument = (kpi) => {
    return {
        "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/multikey/v1"
        ],
        "id": kpi.controller,
        "assertionMethod": [
        `${kpi.controller}#${kpi.publicKeyMultibase}`
        ]
    }
};