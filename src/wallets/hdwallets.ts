import * as bip39 from "bip39";
import { ethers } from "ethers";

class HDWallet {
    mnemonic: string;

    constructor(mnemonic: string) {
        // Check if the mnemonic is valid
        if (!bip39.validateMnemonic(mnemonic)) {
            throw new Error('Invalid mnemonic');
        }
        this.mnemonic = mnemonic;
    }

    createWallet(accountNumber: number) {
        const path = `m/44'/60'/0'/0/${accountNumber}`;
        const wallet = ethers.Wallet.fromMnemonic(this.mnemonic, path);
        return wallet.address;
    }
}

export { HDWallet };
