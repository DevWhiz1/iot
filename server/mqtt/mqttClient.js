// mqttClient.js
const mqtt = require('mqtt');

// Initialize MQTT client
const mqttClient = mqtt.connect('mqtt://192.168.100.14:1883');

// Handle connection events
mqttClient.on('connect', () => {
    console.log('Connected to MQTT Broker');
});



mqttClient.on('error', (error) => {
    console.error('MQTT Connection Error:', error);
});

module.exports = mqttClient; 