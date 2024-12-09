import compiledFactory from "../ethereum/build/Factory.json" assert { type: "json" };
import { ethers } from 'ethers';
import getProvider from "./ethers";

async function createFactory(){
    const address = "0xc8879F18F579A7A34AdB712B98b68CE8754f1157";
    const signer = await getProvider();
    const factory = new ethers.Contract(address, compiledFactory.abi, signer);
    return factory;
}

export default createFactory;

//Original-0xc8879F18F579A7A34AdB712B98b68CE8754f1157
//axel-0xa678359C481503405e0cA3DFA71F989e469A58b9

//factory.txt - 0x0896d954e06d6860487F14C6B6A1015B41FC360f