import Web3 from 'web3';
import { erc20ABI, contractAddress } from "./transfers.contracts";
import Wallets from "../wallets/wallets.model";
import Transfer from "./transfers.model";

const apiKey = process.env.ALCHEMY_API_KEY;
const infuraUrl = `wss://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraUrl));

const listenContractTransfers = (contractAddress: string) => {
    const contract = new web3.eth.Contract(erc20ABI, contractAddress);
    const transferEvent = contract.events.Transfer({
        filter: {},
        fromBlock: 'latest'
    });
    transferEvent.on('data', (event: any) => {
        if (event.event ? event.event === 'Transfer' : false) {
            processTransferEvent(event);
        }
    });
};

const processTransferEvent = async (event: any) => {
    const { from, to, value } = event.returnValues;
    const wallet = await Wallets.findOne({ address: to.toLowerCase() });
    if (wallet) {
        // Check if event already exists
        if (await event.findOne({ hash: event.transactionHash })) {
            return;
        }
        try {
            const transfer = new Transfer({
                contractAddress: event.address,
                to: to,
                from: from,
                hash: event.transactionHash,
                value: value,
                blockNumber: event.blockNumber,
            });
            transfer.save();
        } catch (error) {
            console.error(error);
        }
    }
}

const watchTokenTransfers = async () => {
    listenContractTransfers(contractAddress);
}

export { watchTokenTransfers };
