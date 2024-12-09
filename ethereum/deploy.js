import { readFile } from 'fs/promises';
const compiledFactory = JSON.parse(
    await readFile(
      new URL('./build/Factory.json', import.meta.url)
    )
);
import {ethers} from "ethers";

const provider = ethers.getDefaultProvider("https://sepolia.infura.io/v3/52b0e6f5c3c546f0a92fe3adb34f21c4");

const privatekey = "649d1ecd1e290d82216c468000c331327ce31f8074edcf4da13950cfab01da69";

const wallet = new ethers.Wallet(privatekey,provider);

async function deployFactory(){

    console.log("Attempting to deploy contract from account ",wallet.address);

    const contract = new ethers.ContractFactory(compiledFactory.abi,compiledFactory.evm.bytecode.object,wallet);
    const factory = await contract.deploy();

    console.log("Contract Deployed at ",await factory.getAddress());
    
}

deployFactory();
