import http from "http";
import { Server } from "socket.io";
import { whitelist } from "../utils/cors-whitelist";
import { logger } from "../utils/logger";

function createSocket(app: http.Server) {
  const io = new Server(app, {
    cors: {
      origin: whitelist
    },
  });

  logger.info("Socket is starting ...");

  io.on("connection", (socket) => {
    console.log(`A client connected: ${socket.id}`);
    socket.on("disconnect", () => {
      console.log(`A client disconnected: ${socket.id}`);
    });
  });
}

export { createSocket };
