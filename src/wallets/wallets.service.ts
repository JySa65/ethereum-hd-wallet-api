import Wallets from "./wallets.model";

interface WalletData {
    address: string;
}

async function getAll() {
    return Wallets.find();
}

async function get(id: number) {
    return Wallets.findOne({ _id: id });
}

async function create(data: WalletData) {
    return new Wallets(data).save();
}

export { getAll, get, create };
