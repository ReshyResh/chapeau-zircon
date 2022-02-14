import { ethers } from 'ethers';

export const pay = async (contract, signer) => {
  const connection = contract.connect(signer);
  const addr = connection.address;
  try {
    await contract.payToPlay(addr, {
      value: ethers.utils.parseEther('0.005'),
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const mintToken = async (id, name, color, contract) => {
  const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  try {
    await contract.mint(account, id, name, color);
  } catch (e) {
    window.alert(`Error! ${e.data.message}`);
  }
};
