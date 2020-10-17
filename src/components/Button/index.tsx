import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

function connectSocket() {
    return io.connect("http://localhost:3001");
}

function disconnectSocket(socket?: SocketIOClient.Socket) {
    socket?.disconnect();
}

export const Button = () => {
    const [value, setValue] = useState(0);
    const socketRef = useRef<SocketIOClient.Socket>();
    useEffect(() => {
        socketRef.current = connectSocket();

        socketRef.current?.on("updateFire", (data: number) => {
            setValue(data)
        })

        return function cleanup() { disconnectSocket(socketRef.current) };
    }, [])

    const emitMessage = () => {
        socketRef.current?.emit("fire", value + 1);
    }

    return (
        <div>
            <h1>Button has been fired {value} time{(value === 0 || value > 1) && 's'}</h1>
            <button onClick={emitMessage}>fire!</button>
        </div>
    )
}