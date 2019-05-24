// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const { proof, input } = require('../../zokrates/code/square/proof.json');
module.exports = function (deployer, network, accounts) {


  deployer.deploy(SquareVerifier)
    .then(instance => {
      return deployer.deploy(SolnSquareVerifier, SquareVerifier.address)
        .then(instance => {

          instance.mintNewToken(
            accounts[0],
            0,
            proof.A,
            proof.A_p,
            proof. B,
            proof.B_p,
            proof.C,
            proof.C_p,
            proof.H,
            proof.K,
            input
          )
          
           
             
          
        })
    })

};

