import Web3 from 'web3';
import { erc20ABI } from "./transfers.contracts";
import Wallets from "../wallets/wallets.model";
import Transfer from "./transfers.model";

const web3ProviderWebsocket = process.env.ALCHEMY_WEBSOCKET_URL;
const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
if (!web3ProviderWebsocket) {
    throw new Error("web3 websocket provider is not defined");
}
if (!contractAddress) {
    throw new Error("contract address is not defined");
}
const web3 = new Web3(new Web3.providers.WebsocketProvider(web3ProviderWebsocket));

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
    console.log(`Listening for transfers on contract ${contractAddress}`);
};

const processTransferEvent = async (event: any) => {
    const { from, to, value } = event.returnValues;
    const wallet = await Wallets.findOne({ address: to.toLowerCase() });
    if (wallet) {
        // Check if transfer already exists
        if (await Transfer.findOne({ hash: event.transactionHash })) {
            return;
        }
        try {
            const transfer = new Transfer({
                contractAddress: event.address,
                to: to,
                from: from,
                hash: event.transactionHash,
                value: Number(value),
                blockNumber: Number(event.blockNumber),
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
