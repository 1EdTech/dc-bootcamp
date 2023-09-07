import {cryptosuite as eddsa2022CryptoSuite} from
  '@digitalbazaar/eddsa-2022-cryptosuite';

export const cryptosuite = {
    canonize: eddsa2022CryptoSuite.canonize,
    createVerifier: eddsa2022CryptoSuite.createVerifier,
    name: 'eddsa-rdfc-2022',
    requiredAlgorithm: eddsa2022CryptoSuite.requiredAlgorithm,
};