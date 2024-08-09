  function main() {
    const root = `http://localhost:${3000}`;

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

      const chatRespone = await fetch(`${root}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
      });

      const sentimentRespone = await fetch(`${root}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
      });

      const json = await chatRespone.json();
      
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('message', 'bot');
      botMessageElement.textContent = json.response;

      chatBox.appendChild(botMessageElement);

      const sentimentJson = await sentimentRespone.json();
      
      const sentimentElement = document.createElement('div');
      sentimentElement.classList.add('message', 'sentiment');
      sentimentElement.textContent = sentimentJson.sentiment;
      chatBox.appendChild(sentimentElement);
    });
  }

  main();