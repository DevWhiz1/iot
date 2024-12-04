const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntitySchema = new mongoose.Schema({
    device: {
        type: Schema.Types.ObjectId,
        ref: "Device", 
    },
    entityName: {
        type: String,
        required: true,
    },
    entityId: {
        type: String,
        required: true,
    },
    subscribeTopic: {
        type: String,
        required: true,
    },
    publishTopic: {
        type: String,
        required: true
    },
    stateType: {
        type: String,
        enum: ['switch', 'sensor'],
        required: true
    },
    state: {
        type: Schema.Types.Mixed, 
        required: true
    },
    history: [{
        dateTime: {
            type: Date,
            default: Date.now
        },
        value: {
            type: Schema.Types.Mixed, 
        }
    }, { id: false }],
    isActive: {  
        type: Boolean,
        default: true
    }
}, {
    timestamps: true 
  
});

const EntityModel = mongoose.model('Entity', EntitySchema);
module.exports = EntityModel;
