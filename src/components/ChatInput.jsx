import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  // function sendMessage() {
  //   const newChatMessages = [
  //     ...chatMessages,
  //     {
  //       message: inputText,
  //       sender: "user",
  //       id: crypto.randomUUID(),
  //     },
  //   ];

  //   setChatMessages(newChatMessages);

  //   const response = Chatbot.getResponse(inputText);
  //   setChatMessages([
  //     ...newChatMessages,
  //     {
  //       message: response,
  //       sender: "robot",
  //       id: crypto.randomUUID(),
  //     },
  //   ]);

  //   setInputText("");
  // }
  function sendMessage() {
    if (!inputText.trim()) return;

    // Step 1: add the user message
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    setInputText("");

    // Step 2: show a temporary "thinking" message for the robot
    const loaderMessage = {
      message: "typing...", // temporary placeholder
      sender: "robot",
      id: crypto.randomUUID(),
      isLoading: true,
    };
    setChatMessages([...newChatMessages, loaderMessage]);

    // Step 3: after delay, replace the loader with the real response
    setTimeout(() => {
      const response =
        Chatbot?.getResponse(inputText) || "I'm not sure I understand.";
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }, 1000); // 2 seconds delay for the loader
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        type="text"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
