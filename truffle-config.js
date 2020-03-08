require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remember solid idea arctic obscure giant'; 
let testAccounts = [
"0xfb20431040cf09b31e400fd86b2013be6446ebe0b45a63cb755d88b5b18de651",
"0x7dc91f0a53104a0fb94288412890418242af4b14f54f298142f3a82f50d145b9",
"0xa81539edbca9a71f45e0dfd2d84993c1c63d1dbfb77070750456d51d028b523e",
"0xec360db33828c20d70d4dd1aa3330fdb4c34a8b24ff1e4acfa680c1e00a8d1b1",
"0x1256334d50ff6a443734313e3dc4a1b489eb45f305ad0722186a98e9f0a6bdfd",
"0xba94a16a5ed1d35b1d4bb18062286351e57e9504729050a767b010ee689dd86b",
"0x4a4c87ae1e6748e3b6eff076952722eb25db14ab96ad363fce0176bc96e1646a",
"0x2a8193896442d165b842abeac97a2a0fbeba160dd993548182aa14fa4c33d31a",
"0x60ee68bf7bc2db84f4ead7c4488b7e216ad58874203e22890ea7baf9f406ad7f",
"0x935935c12b26029727c85cd6e9c6439dcd828e9dd8ddccd5ed51c6613dfde2c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
