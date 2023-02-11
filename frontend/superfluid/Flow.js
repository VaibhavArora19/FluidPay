import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { chainId, superToken } from "@/constants";

export const getFlowInfo = async (sender, receiver) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId,
        provider: provider
    });

    const flowInfo = await sf.cfaV1.getFlowInfo({
        sender,
        receiver,
        providerOrSigner: signer
    });
    
    console.log(flowInfo);
};

export const createFlow = async (sender, receiver, flowRate) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId,
        provider: provider
    });
    
    const daix = await sf.loadSuperToken(superToken);

    const flowOp = daix.createFlow({
        sender,
        receiver,
        flowRate,
    });

    await flowOp.exec(signer);
};

export const deleteFlow = async (sender, receiver) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId,
        provider: provider
    });
    
    const daix = await sf.loadSuperToken(superToken);

    const flowOp = daix.deleteFlow({
        sender,
        receiver,
    });

    await flowOp.exec(signer);
};

export const updateFlow = async (sender, receiver, flowRate) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId,
        provider: provider
    });
    
    const daix = await sf.loadSuperToken(superToken);

    const flowOp = daix.updateFlow({
        sender,
        receiver,
        flowRate,
    });

    await flowOp.exec(signer);
}
