import * as bip39 from "bip39";
import { ethers } from "ethers";

function createHDWalletFromMnemonic(mnemonic: string, accountNumber: number): string {
    // Check if the mnemonic is valid
    if (!bip39.validateMnemonic(mnemonic)) {
        throw new Error('Invalid mnemonic');
    }

    // Derive the wallet using the mnemonic and path
    const path = `m/44'/60'/0'/0/${accountNumber}`;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path); // Available in ethers v5

    // Return the wallet address
    return wallet.address;
}

export { createHDWalletFromMnemonic };
