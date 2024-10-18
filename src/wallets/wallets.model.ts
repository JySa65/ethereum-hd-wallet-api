import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
        unique: true,
    },
    externalId: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export default mongoose.model("Wallets", WalletSchema);
