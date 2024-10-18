import Wallets from "./wallets.model";
import { createHDWalletFromMnemonic } from "./hdwallets";

interface WalletData {
    externalId: string;
}

async function getAll() {
    return Wallets.find();
}

async function get(id: string) {
    return Wallets.findOne({ _id: id });
}


const create = async (data: WalletData) => {
    if (await Wallets.findOne({ externalId: data.externalId })) {
        throw new Error("Wallet with this externalId already exists");
    }
    const mnemonic = process.env.MNEMONIC;
    if (!mnemonic) {
        throw new Error("Missing mnemonic in environment variables");
    }
    // Getting the latest index of a wallet
    const latestWallet = await Wallets.findOne().sort({ index: -1 });
    const accountNumber = latestWallet ? latestWallet.index + 1 : 0
    const address = createHDWalletFromMnemonic(mnemonic, accountNumber);
    return new Wallets({
        index: accountNumber,
        externalId: data.externalId,
        address: address,
        path: "m/44'/60'/0'/0/" + accountNumber,
    }).save();
}

export { getAll, get, create };
