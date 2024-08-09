  function main() {
    document.getElementById('chat-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      const message = document.getElementById('chat-input').value.trim();
      if (!message) {
        return;
      }

      console.log(message);
      document.getElementById('chat-input').value = '';

      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'user');
      userMessageElement.textContent = message;

      const chatBox = document.getElementById('chat-box');
      chatBox.appendChild(userMessageElement);
      chatBox.scrollTop = chatBox.scrollHeight;

      const apiRoute = 'http://localhost:3000/chat';
      const response = await fetch(apiRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
      });

      const json = await response.json();

      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('message', 'bot');
      botMessageElement.textContent = json.response;

      chatBox.appendChild(botMessageElement);
    });
  }

  main();