const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ service: 'mon-API', status: 'ok' }));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

if (require.main === module) {
  app.listen(PORT, () => console.log('mon-API listening on ' + PORT));
}
module.exports = app;