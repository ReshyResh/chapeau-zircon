const hre = require("hardhat");

async function main() {

  const Hat = await hre.ethers.getContractFactory("Hat");
  const hat = await Hat.deploy();

  await hat.deployed();

  console.log("Contract deployed to:", hat.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
