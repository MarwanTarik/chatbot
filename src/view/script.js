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

      // Fetch data from the server
      const chatRespone = await fetch(`${root}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
      });

      const regonizeRespone = await fetch(`${root}/recognize`, {
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
      const sentimentJson = await sentimentRespone.json();
      const regonizeJson = await regonizeRespone.json();

      console.log(regonizeJson);

      // Render UI Elements
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('message', 'bot');
      botMessageElement.textContent = json.response;

      chatBox.appendChild(botMessageElement);
      
      const sentimentElement = document.createElement('div');
      sentimentElement.classList.add('message', 'sentiment');
      sentimentElement.textContent = sentimentJson.sentiment;
      chatBox.appendChild(sentimentElement);

      const regonizeElement = document.createElement('div');
      regonizeElement.classList.add('message', 'recognition');

      const { names, dates, locations } = regonizeJson.recognition;
      const nameOutput = names.length > 0 ? names.join(', ') : "No names recognized.";
      const datesOutput = dates.length > 0 ? dates.join(', ') : "No dates recognized.";
      const locationOutput = locations.length > 0 ? locations.join(', ') : "No locations recognized.";

      regonizeElement.innerHTML = `
      Names: ${nameOutput} <br>
      Dates: ${datesOutput} <br>
      Locations: ${locationOutput}
    `;

      chatBox.appendChild(regonizeElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }

  main();