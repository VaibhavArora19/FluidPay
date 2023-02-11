import {salaryBondContract, chainId, xDaix} from "../constants";
import {ethers} from "ethers";
import {Framework} from "@superfluid-finance/sdk-core";

///provides full control to the Gnosis Pay contract
export const authorizeFullAccess = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: chainId,
        provider: provider
    });

    try {
        const authorizeFullControl = sf.cfaV1.authorizeFlowOperatorWithFullControl({
            superToken: xDaix,
            flowOperator: salaryBondContract
        });

        console.log("Updating flow permissions...");
        
        const result = await authorizeFullControl.exec(signer);

        console.log("Authorizing permission successfull");
    }
    catch(err) {
        console.error(err);
    }
};

///update a permission
export const updateFlowPermissions = async (flowRate) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: chainId,
        provider: provider
    });

    try {
        const updatePermission = sf.cfaV1.updateFlowOperatorPermissions({
            flowOperator: salaryBondContract,
            permissions: '',
            flowRateAllowance: flowRate,
            superToken: xDaix
        });

        console.log('Updating flow permissions...');

        const result = await updatePermission.exec(signer);
        console.log(result);

        console.log('Flow permissions has been updated...');
    }
    catch(err) {
        console.log("Updating permission failed...");
        console.error(err);
    }

};

///Revoke Full Control from Gnosis Pay Contract
export const revokeFullControl = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: chainId,
        provider: provider
    });

    try {
        const revokeControl = sf.cfaV1.revokeFlowOperatorWithFullControl({
            superToken: xDaix,
            flowOperator: salaryBondContract
        });

        console.log('Revoking full permissions...');

        const result = await revokeControl.exec(signer);
        
        console.log(result);
        console.log('Permission successfull revoked...');
    }
    catch(err) {
        console.log('Revoking full permission failed...');
        console.error(err);
    }
};