/* eslint-disable default-case */
const ws = require('ws');

const wss = new ws.Server({ port: 5000 }, () => {
  console.log('Server on 5000 port');
});
function broadCastMessage(message) {
  wss.clients.forEach((client) => [
    client.send(JSON.parse(message)),
  ]);
}
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const mes = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadCastMessage(mes);
        break;
      case 'connection':
        broadCastMessage(mes);
    }
  });
});
