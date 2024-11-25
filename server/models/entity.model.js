const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntitySchema = new mongoose.Schema({
    device: {
        type: Schema.Types.ObjectId,
        ref: "Device",  // Ensure this matches your actual Device model
    },
    entityName: {
        type: String,
        required: true,
    },
    entityId: {
        type: String,
        required: true,
    },
    mqttTopic: {
        type: String,
        required: true,
    },
    stateType: {
        type: String,
        enum: ['switch', 'sensor'],
        required: true
    },
    state: {
        type: Schema.Types.Mixed, // If state is more than just a simple value
        required: true
    },
    history: [{
        dateTime: {
            type: Date,
            default: Date.now
        },
        value: {
            type: Schema.Types.Mixed, // Flexible, but can be defined more specifically if needed
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
