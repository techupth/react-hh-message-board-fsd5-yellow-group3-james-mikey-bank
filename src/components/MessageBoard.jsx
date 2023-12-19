import { useState } from "react";
import Message from "./Message";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  function deleteMessage(id) {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      newMessages.splice(id, 1);
      return newMessages;
    });
  }

  function handleClick() {
    setMessages((prevMessages) => {
      return [...prevMessages, messageText];
    });
    setMessageText("");
  }

  const messageElements = messages.map((message, index) => (
    <Message
      inputText={message}
      key={index}
      id={index}
      deleteMessage={deleteMessage}
    />
  ));

  console.log("messages", messages);

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
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
          />
        </label>
        <button className="submit-message-button" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div class="board">{messages && messageElements}</div>
    </div>
  );
}

export default MessageBoard;
