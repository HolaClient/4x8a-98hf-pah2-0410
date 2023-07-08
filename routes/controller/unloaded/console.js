const express = require('express');
const fetch = require('node-fetch');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// Endpoint to establish WebSocket connection and send console logs
app.get('/console-logs/:serverId', async (req, res) => {
  const serverId = req.params.serverId;
  
  try {
    // Generate WebSocket credentials
    const credentialsResponse = await fetch(`https://pterodactyl.file.properties/api/client/servers/${serverId}/websocket`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    const credentialsData = await credentialsResponse.json();
    const websocketAddress = credentialsData.address;
    const token = credentialsData.token;
    
    // Connect to WebSocket
    const ws = new WebSocket(websocketAddress);
    
    ws.on('open', () => {
      // Send authentication event
      ws.send(JSON.stringify({ event: 'auth', args: [token] }));
    });
    
    ws.on('message', (message) => {
      // Handle incoming messages
      const data = JSON.parse(message);
      
      if (data.event === 'console output') {
        // Process console logs
        const consoleLogs = data.args[0].split('\n');
        console.log(consoleLogs);
        
        // You can perform further processing or send the console logs in the response to the client if needed
        
        // Close the WebSocket connection
        ws.close();
      }
    });
    
    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });
    
    // Handle errors
    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
    
    res.send('Fetching console logs...');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
