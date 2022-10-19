// https://eth-rinkeby.alchemyapi.io/v2/HA5pIZABrtOpimlow8UVKdM6-ky4nBDy

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks :{
    rinkeby :
    {
      url : 'https://eth-rinkeby.alchemyapi.io/v2/HA5pIZABrtOpimlow8UVKdM6-ky4nBDy',
      accounts : ['c8a45087c93d9266c9dc6f2c1f6a7eb5e7f4f923f5194c9c349d2bda7243df98']
    }
  }
}