import mongoose from "mongoose";

const TransferSchema = new mongoose.Schema({
    contractAddress: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        required: true,
    },
    blockNumber: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export default mongoose.model("Transfers", TransferSchema);
