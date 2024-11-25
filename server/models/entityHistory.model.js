const mongodb=require("mongoose");
const Schema = mongoose.Schema;

const EntityHistorySchema = new mongoose.Schema({
    entity: {
        type: Schema.Types.ObjectId,
        ref: "Entity",
    },
    value: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
})