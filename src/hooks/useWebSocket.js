import { useState, useEffect, useCallback } from "react";

const WS_URL =
  "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";

export const useWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
      setIsConnected(false);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = useCallback(
    (text) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        const message = {
          text,
          sender: "You",
          timestamp: new Date().toLocaleTimeString(),
        };
        socket.send(JSON.stringify(message));
        setMessages((prev) => [...prev, message]);
      }
    },
    [socket]
  );

  return { messages, sendMessage, isConnected };
};

export default useWebSocket;
