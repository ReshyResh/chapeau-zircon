import { ethers } from 'ethers';

const getBalance = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    return ethers.utils.formatEther(balance);
};

export default getBalance;