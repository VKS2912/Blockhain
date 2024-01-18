

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qhUbqr5JI830gwhek0hgUa8bOaozEtxx',
      accounts: ['8745c1a1432ec05234a78157571985894c7da98f4d78d6750e7d2b7a28bd725b'],
    },
  },
};