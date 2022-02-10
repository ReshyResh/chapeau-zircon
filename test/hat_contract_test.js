const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Mint token', () => {
  it('Should mint token', async () => {
    const Hat = await ethers.getContractFactory('Hat');
    const hat = await Hat.deploy();
    await hat.deployed();

    const recipient = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
    const hatObj = { id: '1', color: 'red', name: 'Red hat' };

    let balance = await hat.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newToken = await hat.mint(recipient, hatObj.id, hatObj.name, hatObj.color);

    await newToken.wait();

    balance = await hat.balanceOf(recipient);
    expect(balance).to.equal(1);
  });
});
