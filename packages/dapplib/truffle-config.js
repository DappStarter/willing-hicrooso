require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note payment cluster include kiwi system tent'; 
let testAccounts = [
"0xc5783efac6beea2819e678838ba50986baf2b923abeb7f39ae7bfe376387e5c4",
"0x173dafb79483e4eb809d5fef724857f04cfc043e68644d3ab7932e0c793af17b",
"0xa8447536c282fefdb213f1e0f3329e073bdba770a0755d99a92a28de147f08d2",
"0xeedef5718661c0163d3df21367253bf0b7563b42bdbf89b3177c25e132bb2f9b",
"0x58d9ae53011f384606d9206160612ddb3671faeb9c964f085133c4ddea220dfc",
"0x4e2af48d6095840aec7713b571f85fb442e3a883c490ec065e23520703038ed2",
"0xe37ff805f062310e48f3b89a02550f8903be272dfe414b8e6bb38f9bbdc9ca60",
"0xeb7fed0a6bb38e9b0d7afce67a751db0da1a0d82068c7ff9d57f9f47abfda81b",
"0xa4ce4a04fd29440545264a23f7f2885df447c2153413e24d38df21905a463573",
"0xc468b5ff7021a66e45f94e760ad3a9f51c5d14432972da3468de2560b9dba60a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
