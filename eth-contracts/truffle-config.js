//require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {

  networks: {
    rinkeby: {
     

      provider: function () {
        return new HDWalletProvider("your 12 seeds", "https://rinkeby.infura.io/v3/infura-key")
      },
      gasPrice: 44000000000,
      network_id: 4
      
    },
    development: {
      host: "127.0.0.1",
      port: "8545",
      gas: 4600000,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }



}

}
