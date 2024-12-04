const express = require("express");
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}));

const port = 8080;
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    // Sending a welcome message to the connected client
    socket.emit("welcome", `Welcome event emitted ${socket.id}`);

    // Listening for messages from the client
    socket.on("msg", (message) => {
        console.log(`Message from client: ${message}`);
        // You can send a response back to the client
        socket.emit("msgReceived", `Message received: ${message}`);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
