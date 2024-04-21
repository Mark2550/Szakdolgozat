import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5173 ;

console.log(__filename);

 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', 'Home.jsx'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
