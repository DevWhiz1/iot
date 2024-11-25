const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TriggerSchema = new Schema({
    triggerId: { type: String,},
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device',  }, 
    entity_Id: { type: Schema.Types.ObjectId, ref: 'Entity',  }, // Adjusted to camelCase for consistency
    conditionState:{type: Schema.Types.Mixed}, // This could represent a trigger type or condition
    above: { type: String,  }, // Consider making these optional if not always applicable
    below: { type: String,  },
}, { _id: false }); 
// Condition schema
const ConditionSchema = new Schema({ // It's better to include required here for consistency
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device', }, 
    entity_Id: { type: Schema.Types.ObjectId, ref: 'Entity',  },
    conditionState:{type: Schema.Types.Mixed},
    above: { type: String, },
    below: { type: String, },
}, { _id: false });

// Action schema
const ActionSchema = new Schema({ // It's better to include required here for consistency
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device', }, 
    entity_Id: { type: Schema.Types.ObjectId, ref: 'Entity',  },
    conditionState:{type: Schema.Types.Mixed},
    above: { type: String, },
    below: { type: String, },
}, { _id: false });

// Automation schema
const AutomationSchema = new Schema({
    triggers: [TriggerSchema],
    conditions: [ConditionSchema],
    actions: [ActionSchema]
}, { timestamps: true }); 

const AutomationModel = mongoose.model("automation", AutomationSchema);
module.exports = AutomationModel;











// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// Condition state schema
// const ConditionStateSchema = new Schema({
//     type: { type: String, enum: ['boolean', 'string'],},
//     value: { 
//         type: Schema.Types.Mixed,
//     }
// }, { _id: false });
// Trigger schema
// const TriggerSchema = new Schema({
//     triggerId: { type: String, required: true },
//     deviceId: { type: Schema.Types.ObjectId, ref: 'device', required: true }, 
//     entity_Id: { type: Schema.Types.ObjectId, ref: 'entity', required: true },
//     conditionState: { type: String, required: true },
//     above: { type: String, required: true},
//     below: { type: String, required: true },
// }, { _id: false }); 

// const ConditionSchema = new Schema({
//     triggerId: { type: String, },
//     deviceId: { type: Schema.Types.ObjectId, ref: 'device', required: true }, 
//     entity_Id: { type: Schema.Types.ObjectId, ref: 'entity', required: true },
//     conditionState: { type: String,  },
//     above: { type: String,},
//     below: { type: String,},
// }, { _id: false });

// const ActionSchema = new Schema({
//     deviceId: { type: Schema.Types.ObjectId, ref: 'device', required: true }, 
//     entity_Id: { type: Schema.Types.ObjectId, ref: 'entity', required: true },
//     conditionState: { type: String, required: true },
//     above: { type: String, required: true},
//     below: { type: String, required: true },
// }, { _id: false });

// const AutomationSchema = new Schema({
//     triggers: [TriggerSchema],
//     conditions: [ConditionSchema],
//     actions: [ActionSchema]
// });

// const AutomationModel = mongoose.model("Automation", AutomationSchema);
// module.exports = AutomationModel;
