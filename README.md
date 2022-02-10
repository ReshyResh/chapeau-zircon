![](https://img.shields.io/badge/Zircon-blueviolet)

# Chapeau 

> Simple single page application that allows the user to participate in a lottery. The user picks a hat from the list, pays a fee to enter the game and, if the transaction is succesful, is displayed with the result. 
> In case the user picked the correct hat, he will be able to mint a token with the metadata of that hat (Only mintable once for each hat).




![](https://i.imgur.com/wqjLMBF.png)

## Built With

- Hardhat
- Ethers
- React
- Redux


## Getting Started

To get a local copy up and running follow these simple example steps.
  - Clone the repo by running `git clone https://github.com/ReshyResh/chapeau-zircon.git`.
  - Navigate to the repository's folder and run `npm install`.
  - Run `npx hardhat node` to run the development network.
  - Run `npm start` to compile and launch the React front-end.

### Setup

You need [MetaMask](https://metamask.io/download/) in order to get the full experience of this app. Make sure you have your testnet set up and grab a private key from the Hardhat node that you start by running `npx hardhat node`, you'll get 10000 test ethers for your transactions.

In order to have a contract deployed locally, you need to compile the `Hat.sol` file by running in your local terminal `npx hardhat run scripts/sample-script.js --network localhost`, this will output the address of your smart contract that you'll need to put inside the `contractAddr.js` file, under the folder `utils`.

![](https://i.imgur.com/iOcxTBG.png)

### Usage

### Run tests
Run the command `npx hardhat test`.


## Author

👤 **Robert Baiesita**

- GitHub: [@ReshyResh](https://github.com/reshyresh)
- LinkedIn: [Robert Baiesita](https://linkedin.com/in/reshyresh)


## Acknowledgments

- Ethereum Remix for testing the smart contract.
- OpenZeppelin for the base of the ERC-721 contract.
- ZirconFinance for the opportunity given.

## 📝 License

This project is MIT licensed.
