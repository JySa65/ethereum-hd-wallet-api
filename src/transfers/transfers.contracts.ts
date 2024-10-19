import { AbiItem } from 'web3-utils';

const erc20ABI: AbiItem[] = [
    {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function"
    },
    {
        constant: false,
        inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "success", type: "bool" }],
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
    }
];


const contractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // USDT Contract Address

export { erc20ABI, contractAddress };
