import { useState } from "react";
import Message from "./Message";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(0);

  function handleMessageSubmit() {
    setMessages((prevMessages) => {
      const newMessages = [
        ...prevMessages,
        { id: messageId, content: messageInput },
      ];
      setMessageInput("");
      setMessageId((prevMessageID) => prevMessageID + 1);
      console.log(newMessages);
      return newMessages;
    });
  }

  function handleDelete(id) {
    setMessages((prevMessages) => {
      const indexToDelete = prevMessages.findIndex((msg) => msg.id === id);
      const nextMessages = [...prevMessages];
      nextMessages.splice(indexToDelete, 1);
      return nextMessages;
    });
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => {
              console.log(e);
              e.key === "Enter" ? handleMessageSubmit() : null;
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((message) => {
          return (
            <Message key={message.id} id={message.id} delete={handleDelete}>
              {message.content}
            </Message>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
